// Assuming your User model is in 'models/User.js'
import User from '../models/User.js';  // Import the User model

export function getUsers(req, res) {
    User.find()  // Use the User model's find method
        .then(users => res.json(users))
        .catch(err => res.status(500).json(err));
}

export function getUserById(req, res) {
    User.findById(req.params.userId)  // Use the User model's findById method
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
}

export function createUser(req, res) {
    User.create(req.body)  // Use the User model's create method
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
}

export function updateUser(req, res) {
    User.findByIdAndUpdate(req.params.userId, req.body, { new: true })  
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
}

export function deleteUser(req, res) {
    User.findByIdAndDelete(req.params.userId)  
        .then(() => res.json({ message: 'User deleted' }))
        .catch(err => res.status(500).json(err));
}

export function addFriend(req, res) {
    User.findByIdAndUpdate(req.params.userId, { $push: { friends: req.params.friendId } }, { new: true })  
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
}

export function removeFriend(req, res) {
    User.findByIdAndUpdate(req.params.userId, { $pull: { friends: req.params.friendId } }, { new: true })  
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
}
