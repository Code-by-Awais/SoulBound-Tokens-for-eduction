const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB Atlas database
mongoose.connect('mongodb+srv://admin:password12345@test.sdwtydz.mongodb.net/?retryWrites=true&w=majority', 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
})
  .then(() => console.log('Connected to MongoDB Atlas database!'))
  .catch((error) => console.error('Error connecting to MongoDB Atlas database:', error));

// Define user schema and model
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});



const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API routes
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('data recieved');
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'user not found' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: ' password is incorrect.' });
    }

    return res.status(200).json({ message: 'Login successful!' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ message: 'An unnexpected error occurred.' });
  }
});

// Start server
app.listen(port, () => console.log(`Server listening on port ${port}`));
