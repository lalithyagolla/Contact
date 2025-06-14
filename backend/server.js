const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();

const app = express();
app.use(cors({
  origin: 'contact-2qwl-lnvif8m6j-lalithyagollas-projects.vercel.app', // Replace with your exact frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use('/api', contactRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
