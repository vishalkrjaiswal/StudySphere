import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Generate JWT token
function generateToken(userId) {
  const secret = process.env.JWT_SECRET || 'devsecret';
  return jwt.sign({ id: userId }, secret, { expiresIn: '7d' });
}

// Register user
async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) 
      return res.status(400).json({ message: 'All fields required' });

    const existing = await User.findOne({ email });
    if (existing) 
      return res.status(409).json({ message: 'Email already in use' });

    const user = await User.create({ name, email, password });
    const token = generateToken(user._id);

    res.status(201).json({
      user: { id: user._id, name: user.name, email: user.email },
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Registration failed' });
  }
}

// Login user
async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) 
      return res.status(400).json({ message: 'Email and password required' });

    const user = await User.findOne({ email });
    if (!user) 
      return res.status(401).json({ message: 'Invalid credentials' });

    const valid = await user.comparePassword(password);
    if (!valid) 
      return res.status(401).json({ message: 'Invalid credentials' });

    const token = generateToken(user._id);

    res.json({
      user: { id: user._id, name: user.name, email: user.email },
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Login failed' });
  }
}

// Get current logged-in user
async function me(req, res) {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch user' });
  }
}

export { register, login, me };
