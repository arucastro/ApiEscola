import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// não deveria existir
router.post('/', loginRequired, userController.store);
router.get('/', loginRequired, userController.index);

router.get('/:id', userController.show);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
