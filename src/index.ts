import express, { Express, NextFunction, Request, Response, Router } from 'express';
import router from "./api";
const app: Express = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
  res.send('Hi, This is express with typescript boilerplate')
})

app.use("/api", router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack)
    res.status(500).send("Error")
  })

app.listen(port, () => {
  process.stdout.write(`Example app listening on `)
  console.log('\x1b[31m%s', `http://localhost:${port}/`)
})