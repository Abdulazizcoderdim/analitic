require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use('/api/auth', require('./routes/auth.route'));
app.use('/api/streams', require('./routes/streams.route'));

// Start server
const bootstrap = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => {
        console.log('Connected to MongoDB');
      })
      .catch(error => {
        console.log(error);
      });

    app.listen(process.env.PORT, () => {
      console.log(
        `Server is running on port http://localhost:${process.env.PORT}`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

bootstrap();
