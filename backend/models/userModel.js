import mongoose from 'mongoose';

// SCHEMA
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
}, {
    timestamps: true
}
);

// MODEL
const User = mongoose.model("User", userSchema);

export default User;