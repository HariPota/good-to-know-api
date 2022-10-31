import express, { Express, Request, Response } from 'express';
import router from './src/routes/index';

const app: Express = express();
const port = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "ok" });
});
app.use('/api', router);

/* Error handler middleware */
app.use((err: any, req: Request, res: Response) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});