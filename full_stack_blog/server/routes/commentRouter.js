const { Router } = require('express');
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware')
const router = new Router();

router.post('/',authMiddleware, commentController.create);
router.get('/post/:id',commentController.getAll);
router.delete('/:id',roleMiddleware(["ADMIN","MOD"]),commentController.delete)

module.exports = router;
