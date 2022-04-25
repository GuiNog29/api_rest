import app from './app';

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`Listening int the door ${port}`);
  console.log(`CTRL + Click to access http://localhost:${port}`);
});
