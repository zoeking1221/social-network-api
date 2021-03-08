const { User } = require('../models');

const UserController = {
    // get all users
    getAllUsers(req, res) {
        User.find({})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    // get single user by id AND populate thought and friend data
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },

    // post new user
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },

    // PUT update user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id}, body, { new: true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData)
        })
        .catch(err => res.json(err));
    },

    // delete user by id
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));
    },

    // // add new friend to a user's friend list
    // addFriend({ params }, res) {
    //     User.findOneAndUpdate({ _id: params.id }, { new: true })
    //     .then(dbUserData => {
    //         if (!dbUserData) {
    //             res.status(404).json({ message: 'No user found with this id!' });
    //             return;
    //         }
    //         res.json(dbUserData);
    //     })
    //     .catch(err => res.json(err));
    // },

    // // remove friend
    // removeFriend({ params }, res) {
    //     User.findOneAndUpdate(
    //         { _id: params.friendId },
    //         { $pull: { friends: { friendId: params.friendId } } },
    //         { new: true }
    //     )
    //     .then(dbUserData => res.json(dbUserData))
    //     .catch(err => res.json(err));
    // }


};

module.exports = UserController;