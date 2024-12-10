import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js"; // Import the User model

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("DB connection failed:", error);
    process.exit(1);
  }
};

connectDB();

app.use("/", 
  (req,res)=>{
    res.send("API is running ....")
  }
)

// Route to create a user
app.post("/api/users", async (req, res) => {
  const { name, email, password, phoneNumber } = req.body;

  try {
    const user = new User({ name, email, password, phoneNumber });
    await user.save(); // Save the user to MongoDB
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
