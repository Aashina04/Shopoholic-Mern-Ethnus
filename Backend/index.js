// require('dotenv').config();
require('dotenv').config();
console.log("🧪 MONGO_URI:", process.env.MONGO_URI);

const connectToMongo = require('./db');
connectToMongo();

const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./Routes/router');


app.use(cors({
  origin: 'https://shopoholic-lemon.vercel.app', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials:true
}));
// app.use(cors());
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});