const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // MongoDB connection
const certificateRoutes = require('./routes/certificateRoutes');
const authRoutes = require('./routes/authRoutes'); // Optional if using Firebase for Auth

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();
app.use(cors()); // Enable Cross-Origin Requests
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api/certificates', certificateRoutes); // Certificate management routes
app.use('/api/auth', authRoutes); // Auth routes (optional)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
