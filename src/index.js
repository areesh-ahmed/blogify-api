// src/index.js

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const {requestLogger, errorHandler} = require('./Midddleware');
const mainRouter = require('./routes');


const PORT = process.env.PORT || 3000;

 




// --- Our Custom Middleware ---


// --- Global Middleware Setup ---
app.use(express.json());
app.use(requestLogger);



// --- Routes ---
app.get('/', (req, res) => {
  res.send('Homepage!');
});

app.use(errorHandler);



app.use('/api/v1', mainRouter);


// Mount it at the very end of the file
app.use(errorHandler);
// =======================================================



app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});