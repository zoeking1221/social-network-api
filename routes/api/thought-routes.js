const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    removeThought,
    createReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// api/thoughts
router
    .route('/')
    .get(getAllThoughts)

router
    .route('/:userId')
    .post(addThought);

// api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById);

router
    .route('/:userId/:thoughtId')
    .delete(removeThought);

// api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .put(createReaction);

// api/thoughts/:thoughtId/reactions/reactionId
router
    .route('/:thoughtId/reactions/reactionId')
    .delete(removeReaction);


module.exports = router;