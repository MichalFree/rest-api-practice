const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const socket = require('socket.io');

const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use('/api', testimonialsRoutes);
app.use('/api', concertsRoutes);
app.use('/api', seatsRoutes);
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

// error
app.use((req, res) => {
  res.status(404).json({ message: '404 not found...' });
});

// server
const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running');
});

const io = socket(server);

io.on('connection', (socket) => {
  console.log('a user connected ' + socket.id);

  socket.on('disconnect', () => {
    console.log('Socket ' + socket.id + ' left');
  });
});