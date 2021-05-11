const { Router } = require('express');
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = new Router();

router.post('/', authMiddleware, postController.create);
router.get('/',  postController.getAll);
router.get('/user/:id', postController.getAllFromUser);
router.get('/:id', postController.getOne);
router.delete('/:id', roleMiddleware(["ADMIN","MOD"]), postController.delete);

module.exports = router;
