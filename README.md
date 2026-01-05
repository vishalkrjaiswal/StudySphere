# StudySphere 📚✨

A productivity app I built to manage my crazy college schedule! Helps students organize assignments, track deadlines, and actually get things done without the chaos.

## What does it do?

Basically everything I needed as a student:
- ✅ Organize tasks by categories (Academics, Personal, Projects, etc.)
- 📅 Drag-and-drop calendar to reschedule stuff easily
- 🎯 Set priorities so you know what to tackle first
- 📊 Track progress with visual charts
- 🔐 Secure login so your data stays private
- 📱 Works on phone, tablet, and laptop

## Why I made this

Let's be real - managing college life is HARD. Between assignments, exams, projects, club activities, and trying to have a social life, I was drowning in sticky notes and forgetting deadlines left and right. 

I tried existing apps but they were either:
- Too complicated (I just want to add a task, not learn rocket science)
- Not flexible enough (can't organize by MY categories)
- Expensive (I'm a student, remember?)

So I decided to build my own! Plus, it was the perfect way to level up my full-stack skills.

## The real problem it solves

**Before StudySphere:**
- Tasks scattered across 5 different apps
- Missing deadlines because I forgot to check my planner
- No clear view of what's urgent vs what can wait
- Couldn't see my week/month at a glance

**After StudySphere:**
- Everything in ONE place
- Calendar view shows my entire schedule
- Drag-and-drop makes rescheduling super easy
- Dashboard tells me exactly what needs attention

## Tech Stack

**Frontend:**
- React.js (with Hooks - useState, useEffect, useContext)
- React Router for navigation
- React Calendar for the calendar view
- Tailwind CSS (because writing CSS from scratch is painful)
- Axios for API calls
- Chart.js for progress visualization

**Backend:**
- Node.js & Express.js
- MongoDB with Mongoose (schemas for tasks, users, categories)
- JWT Authentication (secure login/logout)
- RESTful API design
- bcrypt for password hashing

**Database:**
- MongoDB Atlas (cloud database)
- Local Storage for quick client-side caching

## Key Features

### 1. **Category-Based Task Management**
Not all tasks are created equal! Organize by:
- 📖 Academic (assignments, exams, readings)
- 🎨 Personal (gym, hobbies, chores)
- 💼 Projects (side projects, internship work)
- 🎉 Events (birthdays, meetups)

### 2. **Smart Calendar View**
- **Drag-and-drop scheduling** - Just drag tasks to reschedule them
- Switch between day/week/month views
- Color-coded by category
- Click any date to add new tasks

### 3. **Priority System**
- 🔴 High Priority (due soon or super important)
- 🟡 Medium Priority (important but not urgent)
- 🟢 Low Priority (can do later)

### 4. **Dashboard Overview**
- Total tasks, pending, completed
- Upcoming deadlines (next 7 days)
- Progress charts (completion rate by category)
- Recent activity feed

### 5. **Task CRUD Operations**
- Create tasks with title, description, due date, priority, category
- Edit tasks (because plans change!)
- Mark as complete (so satisfying ✓)
- Delete tasks you no longer need

### 6. **Secure Authentication**
- User registration with email validation
- Secure login with JWT tokens
- Password hashing with bcrypt
- Session management
- Protected routes (can't access tasks without logging in)

## How to run this locally

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local installation OR MongoDB Atlas account)
- A code editor (VS Code recommended)

### Step 1: Clone the repo
```bash
git clone https://github.com/yourusername/studysphere.git
cd studysphere
```

### Step 2: Backend setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```env
# Database
MONGODB_URI=mongodb://localhost:27017/studysphere
# OR use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/studysphere

# Authentication
JWT_SECRET=your-super-secret-jwt-key-change-this
JWT_EXPIRE=7d

# Server
PORT=5001
NODE_ENV=development
```

Start the backend server:
```bash
npm run dev
```

You should see: `✅ Server running on port 5001` and `✅ MongoDB connected`

### Step 3: Frontend setup

Open a new terminal:
```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` folder:
```env
VITE_API_URL=http://localhost:5001
```

Start the frontend:
```bash
npm run dev
```

### Step 4: Open in browser

Go to `http://localhost:5173` (Vite will show you the exact URL)

Create an account and start organizing your life! 🎉

## Project Structure
```
studysphere/
├── backend/
│   ├── src/
│   │   ├── models/        # Mongoose schemas
│   │   ├── routes/        # API routes
│   │   ├── controllers/   # Business logic
│   │   ├── middleware/    # Auth middleware
│   │   └── utils/         # Helper functions
│   ├── .env
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Main pages
│   │   ├── context/       # React Context (auth, tasks)
│   │   ├── utils/         # Helper functions
│   │   └── App.jsx
│   └── .env
└── README.md
```

## API Endpoints

### Authentication
```
POST   /api/auth/register    - Create new account
POST   /api/auth/login       - Login user
GET    /api/auth/me          - Get current user
POST   /api/auth/logout      - Logout user
```

### Tasks
```
GET    /api/tasks            - Get all user tasks
POST   /api/tasks            - Create new task
GET    /api/tasks/:id        - Get single task
PUT    /api/tasks/:id        - Update task
DELETE /api/tasks/:id        - Delete task
PATCH  /api/tasks/:id/toggle - Toggle task completion
```

### Categories
```
GET    /api/categories       - Get all categories
POST   /api/categories       - Create new category
PUT    /api/categories/:id   - Update category
DELETE /api/categories/:id   - Delete category
```

## What I learned

This project taught me SO much:

**Frontend:**
- React Hooks (useState, useEffect, useContext, useReducer)
- Protected routes with React Router
- Drag-and-drop functionality
- State management without Redux
- Responsive design with Tailwind
- Working with calendar libraries

**Backend:**
- RESTful API design principles
- MongoDB schema design and relationships
- JWT authentication flow
- Middleware for auth and error handling
- Express.js best practices
- Environment variables and security

**Full-Stack:**
- How frontend and backend communicate
- Handling authentication across both layers
- CORS and security considerations
- Deployment considerations
- Git workflow and version control

**Soft Skills:**
- Breaking down big features into small tasks
- Debugging (A LOT of debugging 😅)
- Reading documentation
- Stack Overflow is a lifesaver
- Planning before coding saves time

## Challenges I faced

1. **Drag-and-drop was tricky** - Took me a while to get the calendar drag-and-drop working smoothly
2. **Authentication flow** - Understanding JWT tokens and how to store them securely
3. **State management** - Keeping frontend state in sync with backend data
4. **Date handling** - Timezones are confusing! Used libraries to help
5. **Responsive design** - Making it look good on all screen sizes

## Future improvements

Things I want to add:
- [ ] Push notifications for upcoming deadlines
- [ ] Pomodoro timer integration
- [ ] Study session tracking
- [ ] Collaboration (share tasks with study groups)
- [ ] Dark mode (everyone loves dark mode!)
- [ ] Export tasks to PDF/CSV
- [ ] Recurring tasks (for weekly assignments)
- [ ] Mobile app (React Native maybe?)
- [ ] Integration with Google Calendar
- [ ] AI-powered task prioritization


## Deployment

Planning to deploy on:
- **Frontend**: Vercel or Netlify
- **Backend**: Railway, Render, or Heroku
- **Database**: MongoDB Atlas

Will update with live link once deployed!

## Common Issues & Solutions

**Problem:** Can't connect to MongoDB  
**Solution:** Make sure MongoDB is running locally OR check your Atlas connection string

**Problem:** "JWT malformed" error  
**Solution:** Clear your localStorage and login again

**Problem:** Tasks not showing up  
**Solution:** Check if backend is running and API URL in frontend .env is correct

**Problem:** Calendar not loading  
**Solution:** Check browser console for errors, might be a date format issue



