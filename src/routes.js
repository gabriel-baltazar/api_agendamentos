import { Router } from 'express';
import { CreateEventController } from './controllers/CreateEventController';
import { FindEventController } from './controllers/FindEventController';
import { FindAllEventController } from './controllers/FindAllEventController';
import { UpdateEventController } from './controllers/UpdateEventController';
import { DeleteEventController } from './controllers/DeleteEventController';
import { CreateUserController } from './controllers/CreateUserController';
import { LoginUserController } from './controllers/LoginUserController';
import { PrivateController } from './controllers/PrivateController';
import { checkToken } from './middleware/CheckToken';

const router = Router();

const createEvent = new CreateEventController();

const findEvent = new FindEventController();
const findAllEvent = new FindAllEventController();

const updateEvent = new UpdateEventController();

const deleteEvent = new DeleteEventController();

const createUser = new CreateUserController();
const loginUser = new LoginUserController();
const privateController = new PrivateController();

// Create
router.post('/event', createEvent.handle);

// Update
router.put('/event/:id', updateEvent.handle);

// Read
router.get('/event/:id', findEvent.handle);
router.get('/event', findAllEvent.handle);

// Delete
router.delete('/event/:id', deleteEvent.handle)

// Auth
router.post('/auth/register', createUser.handle)
router.post('/auth/login', loginUser.handle)

// Private
router.get('/user/:id', checkToken, privateController.handle)

export { router };
