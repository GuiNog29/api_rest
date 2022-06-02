import app from './app';

const port = process.env.APP_PORT;
app.listen(port, () => {
  console.log();
  console.log(`CTRL + Click in http://localhost:${port}`);
});
