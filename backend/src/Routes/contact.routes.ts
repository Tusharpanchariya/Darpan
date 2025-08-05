import { Router } from 'express';
import { submitContact } from '../Controllers/contact.controller';

const router = Router();
router.post('/', submitContact);
export default router;
