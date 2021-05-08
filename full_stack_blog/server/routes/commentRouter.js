const { Router } = require('express');
const commentController = require('../controllers/commentController');
const router = new Router();



router.post('/',commentController.create);
router.get('/post/:id',commentController.getAll);
//router.get('/',commentController.getAll);
router.delete('/:id',commentController.delete)

module.exports = router;
