const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
   {
      id: mongoose.Schema.Types.ObjectId,
      email: {
         type: String,
         unique: true,
         required: [true, "can't be blank"],
      },
      phone: { type: Number, trim: true },
      password: { type: String, trim: true },
      createdAt: { type: Date, default: Date.now },
      deleted: { type: Boolean, default: false },
   },
   { timestamps: true, minimize: false }
);

const Users = mongoose.model("Users", userSchema);
module.exports = Users;
