import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connecté"))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Bienvenue sur Chat Caribbean!');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log('Serveur lancé sur le port ' + PORT));
