const express = require("express");
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');


const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const eventRoutes = require('./routes/event.routes');
const orderRouter = require('./routes/order.routes');
const stripeRoutes = require("./routes/stripe.routes")
const ticketsRoutes = require("./routes/ticket.routes")
const setTicketRoutes = require("./routes/checkTickets.routes")
const path = require('path');
// CONFIGURATIONS
const app = express();
app.use(cors({
    origin: ['http://127.0.0.1:5173', 'http://localhost:5173', 'https://sinapsisproductions.online', 'http://127.0.0.1:5174']
  }));
app.use(express.json());
app.use('/public', express.static('public'));
app.use('/panel', express.static(path.join(__dirname, 'panel')));
app.use(express.static(path.join(__dirname, 'view')));
// ROUTES
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes)
app.use('/api/orders', orderRouter);
app.use('/api/checkout', stripeRoutes)
app.use('/api/tickets', ticketsRoutes)
app.use('/api/ticket', setTicketRoutes)


// CONNECTION TO THE DATABASE USING MONGOOSE
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB CONNECTED SUCCESSFULLY'))
  .catch((err) => {
    console.log(err);
  });

  app.get('/panel/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'panel/index.html'));
  });
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'view/index.html'));
  });
  // SERVER
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT);
});