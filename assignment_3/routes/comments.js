const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

router.get('/edit', async (req, res, next) => {
    let commentIndex = req.query.id;
    let comment = Comment.get(commentIndex);
    res.render('comments/form', { title: 'BookedIn || Comments', comment: comment, commentIndex: commentIndex });
});

router.post('/upsert', async (req, res, next) => {
    console.log('body: ' + JSON.stringify(req.body));
    Comment.upsert(req.body);
    let createdOrupdated = req.body.id ? 'updated' : 'created';
    req.session.flash = {
    type: 'info',
    intro: 'Success!',
    message: `the edit has been ${createdOrupdated}!`,
  };
  res.redirect(303, '/books/show/' + req.body.bookId);
});



module.exports = router;