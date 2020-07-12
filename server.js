  
const express = require('express');
const cors = require('cors');
const connectDB = require('./DB/Conncection');
const app = express();

app.use(cors());
connectDB();
app.use(express.json({ extended: false }));
app.use('/api/userModel', require('./Api/User'));
const Port = process.env.Port || 3000;

app.listen(Port, () => console.log('Server started'));