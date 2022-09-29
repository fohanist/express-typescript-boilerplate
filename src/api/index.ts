import express, { Router } from 'express';
import hello from "./hello";
const router: Router = express.Router();

router.use('/hello', hello);

export default router;