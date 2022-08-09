import { Router } from 'express';
import { CreateEventController } from './controllers/CreateEventController';

const router = Router();

const createEvent = new CreateEventController();

router.post('/event', createEvent.handle);


export { router };
