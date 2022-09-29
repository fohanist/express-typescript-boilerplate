import express, { Request, Response, Router } from 'express';
const router: Router = express.Router();

function hello(req: Request, res: Response) {
    res.send('Hello World!')
}

router.get('/', hello);

export default router;