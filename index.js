import express from 'express';
import add from './funcA';

const app = express();
const test = () => {
  console.log('this is running');
  console.log(add(5, 6));
};

test();

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000');
});
