import 'dotenv/config';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

import { router } from './routes';

const app = express();
app.use(cors());

const http = createServer(app);
const io = new Server(http, {
  cors: {
    origin: '*'
  }
});

io.on("connection", socket => {
  console.log(`User conect in socket: ${socket.id}`)
})

app.use(express.json());
app.use(router);

app.get('/github', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);
});

app.get('/signin/callback', (req, res) => {
  const { code } = req.query;

  res.json(code);
})

export { http, io };