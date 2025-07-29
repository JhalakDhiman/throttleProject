const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name:{
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
  }
)

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("user", userSchema)