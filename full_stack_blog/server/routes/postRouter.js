const { Router } = require('express');
const router = new Router();

router.post('/posts');
router.get('/posts');
router.get('/posts/:id');
router.delete('/posts/:id');

module.exports = router;
