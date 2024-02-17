require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/products', productRoute);


mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected!'),
    app.listen('3004', () => {
      console.log('Sucess port 3004 is up')
    })
  )
  .catch(
    () => {
      console.log('Connection failed');
    }
  )