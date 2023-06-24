const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors')
const app=express()
const PORT=process.env.PORT | 5000
const routes = require('./routes/RecipeRouter')

require("dotenv").config()

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://127.0.0.1:27017',{dbName:'appdb'}).then(function() {
    console.log('Connected to database');
}).catch(function(err) {
    console.log(JSON.stringify(err));
});

// Middleware
app.use(express.json());


// Routes
app.use('/api/recipes', routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Something went wrong' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




