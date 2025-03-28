import Thought from '../models/Thought.js';
import User from '../models/User.js'; 


export async function getThoughts(req, res) {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to get thoughts" });
  }
}


export async function getThoughtById(req, res) {
  try {
    const thought = await Thought.findById(req.params.thoughtId);
    if (!thought) return res.status(404).json({ error: "Thought not found" });
    res.json(thought);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to get thought" });
  }
}

export async function createThought(req, res) {
  try {
    const { thoughtText, username } = req.body;


    if (!thoughtText || !username) {
      return res.status(400).json({ error: "Both thoughtText and username are required" });
    }


    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }


    const newThought = await Thought.create(req.body);

 
    await User.findByIdAndUpdate(user._id, { $push: { thoughts: newThought._id } });

    res.status(201).json(newThought);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create thought" });
  }
}


export async function updateThought(req, res) {
  try {
    const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true, runValidators: true });
    if (!updatedThought) return res.status(404).json({ error: "Thought not found" });
    res.json(updatedThought);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update thought" });
  }
}


export async function deleteThought(req, res) {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
    if (!thought) return res.status(404).json({ error: "Thought not found" });


    await User.findOneAndUpdate({ thoughts: req.params.thoughtId }, { $pull: { thoughts: req.params.thoughtId } });

    res.json({ message: "Thought deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete thought" });
  }
}


export async function addReaction(req, res) {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $push: { reactions: req.body } },
      { new: true, runValidators: true }
    );
    if (!thought) return res.status(404).json({ error: "Thought not found" });
    res.json(thought);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add reaction" });
  }
}


export async function removeReaction(req, res) {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $pull: { reactions: { _id: req.params.reactionId } } },
      { new: true }
    );
    if (!thought) return res.status(404).json({ error: "Thought not found" });
    res.json(thought);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to remove reaction" });
  }
}
