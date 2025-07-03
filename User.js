
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  pseudo: String,
  email: String,
  password: String,
  role: { type: String, enum: ['user', 'mod', 'admin'], default: 'user' },
  badges: [String],
  verified: { type: Boolean, default: false },
  gems: { type: Number, default: 0 },
  xp: { type: Number, default: 0 },
  inventory: [String],
  afk: { type: Boolean, default: false },
  afkMessage: String,
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
