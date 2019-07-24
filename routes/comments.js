const express = require('express');
const router = express.Router();

// Databse
const db = require('../models');
function getTime() {
    return new Date().toLocaleString();
  };


//Comment create
router.post('/', (req ,res) => {
    const newComment = req.body;
    const currentUser = req.currentUser;
    newComment.user = currentUser;

    db.Comment.create(newComment, (err, createdComment) => {
      if (err) return res.status(400).json({
        status: 400,
        message: 'Something went wrong, please try again'});

      res.status(201).json({
        status: 201,
        data: createdComment,
        requestedAt: getTime(),
      });
    });
  });

  // Comment Destroy
router.delete('/:comment_id', (req, res) => {
    db.Comment.findByIdAndDelete(req.params.comment_id, (err, deletedComment) => {
      if (err) return res.status(400).json({
        status: 400,
        message: 'Something went wrong, please try again',
      });

      console.log(deletedComment);
      res.status(200).json({
        status: 200,
        message: 'Success',
      });
    });
  });

  module.exports = router;
