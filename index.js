import express from 'express';
import {createPostID} from './src/firebaseOperations.js';
const app = express();

app.use(express.json())

app.get('/ping', (req, res) => {
  res.send('Pong!');
});

app.post('/create-post', (req, res) => {
  let {author, title, body} = req.body;
  createPostID();
  res.send('Thanks lol.\n');
});

app.listen(8080, () => {
  console.log('Backend started.');
});