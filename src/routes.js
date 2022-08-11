import { Router } from 'express';
import { CreateEventController } from './controllers/CreateEventController';
import { FindEventController } from './controllers/FindEventController';
import { FindAllEventController } from './controllers/FindAllEventController';
import { UpdateEventController } from './controllers/UpdateEventController';
import { DeleteEventController } from './controllers/DeleteEventController';
import { CreateUserController } from './controllers/CreateUserController';
import { LoginUserController } from './controllers/LoginUserController';
import { checkToken } from './middleware/CheckToken';
import { DeleteUserController } from './controllers/DeleteUserController';

const router = Router();

const createEvent = new CreateEventController();

const findEvent = new FindEventController();
const findAllEvent = new FindAllEventController();

const updateEvent = new UpdateEventController();

const deleteEvent = new DeleteEventController();

const createUser = new CreateUserController();
const loginUser = new LoginUserController();
const deleteUser = new DeleteUserController();

// Events
router.post('/event', checkToken, createEvent.handle);
router.put('/event/:id', checkToken, updateEvent.handle);
router.get('/event/:id', checkToken, findEvent.handle);
router.get('/event', checkToken, findAllEvent.handle);
router.delete('/event/:id', checkToken, deleteEvent.handle)

// Auth
router.post('/auth/register', createUser.handle)
router.post('/auth/login', loginUser.handle)
router.delete('/auth/disable/:id', deleteUser.handle)



export { router };
