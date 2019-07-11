import express from 'express';

const app = express();
const test = () => {
  console.log('this is running');
};

test();

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000');
});
