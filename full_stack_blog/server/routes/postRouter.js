const { Router } = require('express');
const postController = require('../controllers/postController');
const router = new Router();

router.post('/', postController.create);
router.get('/', postController.getAll);
router.get('/user/:id', postController.getAllUser);
router.get('/:id', postController.getOne);
router.delete('/:id', postController.delete);

module.exports = router;
