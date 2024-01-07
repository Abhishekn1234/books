const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const booksRoute = require('./routes/bookRoutes');

const contactRouter=require("./routes/contact");
const app = express();

// CORS Configuration
app.use(cors());

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());


app.use('/books', booksRoute);

app.use('',contactRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});
const uri = 'mongodb://localhost:27017/book-store';
console.log('Database URI:', uri);
const PORT=3001;

// MongoDB Connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('App is connected to the database');
    // Start the server after successful database connection
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit the process on connection failure
  });
