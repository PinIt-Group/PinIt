// router for requests to the /chore endpoint
const express = require('express');
const choreController = require('../controllers/choreController');
const router = express.Router();

// get requests to chore would be for populating the chore dropdown
router.get('/', choreController.getChores, (req, res) => {
  return res.status(200).json(res.locals.chores);
});

// post requests for chore would be to add to the chore table in the db
router.post('/', choreController.addChore, (req, res) => {
  return res.status(200).json(res.locals.newChore);
});

router.patch('/reassign', choreController.reassignChore, (req, res) => {
  return res.status(200).json(res.locals.response);
});

// patch requests to chore would be for assigning new chores to a user
router.patch('/', choreController.updateChore, (req, res) => {
  return res.status(200).json(res.locals.response);
});

router.delete('/room/:room', choreController.deleteRoom, (req, res) => {
  return res.status(200).json(res.locals.response);
});

// delete requests to chore should remove the row from the database
router.delete('/:chore', choreController.deleteChore, (req, res) => {
  return res.status(200).json(res.locals.response);
});

module.exports = router;
