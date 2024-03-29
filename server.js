const express = require('express');
const connectDB = require('./config/db');
const colors = require('colors');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

app.use(cors());

dotenv.config();

colors.setTheme({
  custom: ['green', 'underline','bgYellow']
});

// Connect MongoDB 
connectDB();

// 
app.use(express.json({extended: false}));

//Routes Definitions

app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))
app.use('/api/conversations', require('./routes/api/conversations'))
app.use('/api/messages', require('./routes/api/messages'))


app.get("/", (req, res) => {
  res.send("API is running...");
});


//Server-PORT Connection
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`.custom));