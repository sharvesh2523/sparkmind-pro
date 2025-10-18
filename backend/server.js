const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data - in a real app, this would come from a database
// Note: These passwords are hashed using bcrypt with 10 rounds
const users = [
  { 
    id: 1, 
    name: 'Sarah Johnson', 
    email: 'sarah@example.com', 
    student: 'Emma Johnson',
    username: 'sarahj',
    password: '$2b$10$fbhX33mpNyjvqiY4oVLyMuJYqr200FXFH2cUCu6EvZ8QOaqqqoaNS' // password: sarah123
  },
  { 
    id: 2, 
    name: 'Michael Chen', 
    email: 'michael@example.com', 
    student: 'David Chen',
    username: 'michaelc',
    password: '$2b$10$vTYe12hlvHD5WRnR3tytdObAkwxPAPJtpQ9W6ho2T6mr.VwYDEHMa' // password: michael456
  },
  { 
    id: 3, 
    name: 'Priya Sharma', 
    email: 'priya@example.com', 
    student: 'Arjun Sharma',
    username: 'priyas',
    password: '$2b$10$A3GIfznlMA5sfw54O8Qjd.RUy4ZbbeR98RmjH50TgKcB9ElXSbMDy' // password: priya789
  },
  { 
    id: 4, 
    name: 'John Smith', 
    email: 'john@example.com', 
    student: 'Alice Smith',
    username: 'johns',
    password: '$2b$10$yW75ESs61MJWjwZ/vTNoeudA7lH2xy4Z8e7rnYo.8FkEazzM7gDv.' // password: john123
  },
  { 
    id: 5, 
    name: 'Emma Wilson', 
    email: 'emma@example.com', 
    student: 'Bob Wilson',
    username: 'emmaw',
    password: '$2b$10$K56vtqLD4EMw5UbSw.vBme0NQjR5uF8MOSrZ1egyXZVhF8w1aL20C' // password: emma456
  },
];

const goals = [
  { id: 1, userId: 1, title: 'Improve Math Problem Speed', description: 'Increase speed in solving algebra problems', targetDate: '2025-12-31', category: 'Academic', progress: 65 },
  { id: 2, userId: 1, title: 'Read 2 Books This Month', description: 'Read at least 2 books from the recommended reading list', targetDate: '2025-11-30', category: 'Academic', progress: 50 },
  { id: 3, userId: 1, title: 'Science Project Excellence', description: 'Complete the science fair project with detailed documentation', targetDate: '2025-12-15', category: 'Academic', progress: 80 },
  { id: 4, userId: 2, title: 'Master Spanish Vocabulary', description: 'Learn 500 new Spanish words', targetDate: '2025-11-20', category: 'Language', progress: 30 },
  { id: 5, userId: 2, title: 'Physical Fitness Goal', description: 'Run 5km without stopping', targetDate: '2025-12-10', category: 'Health', progress: 75 },
  { id: 6, userId: 3, title: 'Art Portfolio Development', description: 'Create 10 pieces for portfolio', targetDate: '2025-11-25', category: 'Creative', progress: 40 },
  { id: 7, userId: 3, title: 'History Essay Writing', description: 'Write comprehensive essay on World War II', targetDate: '2025-12-05', category: 'Academic', progress: 90 },
];

const achievements = [
  { id: 1, userId: 1, icon: '🏆', name: 'Honor Roll', earned: true, date: 'October 2023', description: 'Achieved top 10% performance in all subjects for the semester', category: 'Academic Excellence', rarity: 'Rare' },
  { id: 2, userId: 1, icon: '📚', name: 'Bookworm', earned: true, date: 'November 2023', description: 'Read 10 books in one month, exceeding the monthly goal', category: 'Literacy', rarity: 'Common' },
  { id: 3, userId: 1, icon: '⭐', name: 'Star Student', earned: true, date: 'September 2023', description: 'Consistently demonstrated outstanding classroom participation', category: 'Participation', rarity: 'Uncommon' },
  { id: 4, userId: 2, icon: '🏃', name: 'Fitness Enthusiast', earned: true, date: 'October 2023', description: 'Completed 30-day fitness challenge', category: 'Health', rarity: 'Common' },
  { id: 5, userId: 2, icon: '🗣️', name: 'Polyglot', earned: true, date: 'November 2023', description: 'Achieved conversational fluency in Spanish', category: 'Language', rarity: 'Uncommon' },
  { id: 6, userId: 3, icon: '🎨', name: 'Creative Genius', earned: true, date: 'October 2023', description: 'Won school art competition', category: 'Creative', rarity: 'Rare' },
  { id: 7, userId: 3, icon: '🧠', name: 'History Buff', earned: true, date: 'September 2023', description: 'Scored 100% on history exam', category: 'Academic Excellence', rarity: 'Uncommon' },
];

// Add some additional data for insights and engagement
const insights = [
  { id: 1, userId: 1, subject: 'Mathematics', score: 85, lastUpdated: '2025-10-10', trend: 'up' },
  { id: 2, userId: 1, subject: 'English', score: 78, lastUpdated: '2025-10-10', trend: 'down' },
  { id: 3, userId: 1, subject: 'Science', score: 92, lastUpdated: '2025-10-10', trend: 'up' },
  { id: 4, userId: 2, subject: 'Spanish', score: 70, lastUpdated: '2025-10-10', trend: 'up' },
  { id: 5, userId: 2, subject: 'Physical Education', score: 88, lastUpdated: '2025-10-10', trend: 'stable' },
  { id: 6, userId: 3, subject: 'Art', score: 95, lastUpdated: '2025-10-10', trend: 'up' },
  { id: 7, userId: 3, subject: 'History', score: 90, lastUpdated: '2025-10-10', trend: 'up' },
];

const engagement = [
  { id: 1, userId: 1, date: '2025-10-14', timeSpent: 120, activities: 5, streak: 7 },
  { id: 2, userId: 1, date: '2025-10-13', timeSpent: 90, activities: 3, streak: 6 },
  { id: 3, userId: 1, date: '2025-10-12', timeSpent: 150, activities: 6, streak: 5 },
  { id: 4, userId: 2, date: '2025-10-14', timeSpent: 80, activities: 4, streak: 3 },
  { id: 5, userId: 2, date: '2025-10-13', timeSpent: 110, activities: 5, streak: 2 },
  { id: 6, userId: 3, date: '2025-10-14', timeSpent: 140, activities: 7, streak: 8 },
  { id: 7, userId: 3, date: '2025-10-13', timeSpent: 100, activities: 4, streak: 7 },
];

// Routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'Backend server is running!' });
});

// Get user by ID
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

// Get goals for a user
app.get('/api/users/:id/goals', (req, res) => {
  const userGoals = goals.filter(g => g.userId === parseInt(req.params.id));
  res.json(userGoals);
});

// Create a new goal
app.post('/api/users/:id/goals', (req, res) => {
  const { title, description, targetDate, category } = req.body;
  
  // Validate required fields
  if (!title || !description || !targetDate || !category) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  
  const newGoal = {
    id: goals.length + 1,
    userId: parseInt(req.params.id),
    title,
    description,
    targetDate,
    category,
    progress: 0
  };
  
  goals.push(newGoal);
  res.status(201).json(newGoal);
});

// Get achievements for a user
app.get('/api/users/:id/achievements', (req, res) => {
  const userAchievements = achievements.filter(a => a.userId === parseInt(req.params.id));
  res.json(userAchievements);
});

// Update goal progress
app.put('/api/goals/:id', (req, res) => {
  const goalId = parseInt(req.params.id);
  const { progress } = req.body;
  
  const goalIndex = goals.findIndex(g => g.id === goalId);
  if (goalIndex === -1) {
    return res.status(404).json({ message: 'Goal not found' });
  }
  
  goals[goalIndex].progress = progress;
  res.json(goals[goalIndex]);
});

// Add new routes for insights and engagement data
// Get insights for a user
app.get('/api/users/:id/insights', (req, res) => {
  const userInsights = insights.filter(i => i.userId === parseInt(req.params.id));
  res.json(userInsights);
});

// Get engagement data for a user
app.get('/api/users/:id/engagement', (req, res) => {
  const userEngagement = engagement.filter(e => e.userId === parseInt(req.params.id));
  res.json(userEngagement);
});

// Add login endpoint
app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  
  // Find user by username
  const user = users.find(u => u.username === username);
  
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  // Compare passwords using bcrypt
  const validPassword = await bcrypt.compare(password, user.password);
  
  if (!validPassword) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  
  // Return user data without password
  const { password: _, ...userWithoutPassword } = user;
  res.json({ 
    message: 'Login successful', 
    user: userWithoutPassword 
  });
});

// Add register endpoint
app.post('/api/auth/register', async (req, res) => {
  const { name, email, student, username, password } = req.body;
  
  // Check if user already exists
  const existingUser = users.find(u => u.username === username || u.email === email);
  
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }
  
  // Hash the password
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  
  // Create new user
  const newUser = {
    id: users.length + 1,
    name,
    email,
    student,
    username,
    password: hashedPassword
  };
  
  users.push(newUser);
  const { password: _, ...userWithoutPassword } = newUser;
  res.status(201).json({ 
    message: 'User registered successfully', 
    user: userWithoutPassword 
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

module.exports = app;