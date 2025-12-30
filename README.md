# StudySphere 📚✨

A simple study planner I built to help me (and other students!) keep track of assignments, exams, and projects. No more missing deadlines or forgetting what to study!

## What does it do?

Basically, you can:
- ✅ Add all your study tasks with deadlines
- 📅 See them in a calendar view
- 📊 Track your progress with cool charts
- 🎯 Mark priorities so you know what to focus on
- 🔐 Keep your data safe with login/signup

## Why I made this

Honestly, I was tired of juggling multiple apps and sticky notes. I wanted ONE place to see all my study stuff - assignments, exam prep, project deadlines, everything. Plus, I wanted to learn full-stack development, so this was perfect practice!

## Tech I used

**Frontend:**
- React 
- Vite
- TailwindCSS 
- Chart.js for the graphs
- React Big Calendar for the calendar view

**Backend:**
- Node.js & Express
- MongoDB 
- JWT for auth 
- bcrypt to hash passwords

## How to run this locally

### Step 1: Get MongoDB running
Either install MongoDB locally or use MongoDB Atlas (free tier works great!)

### Step 2: Backend setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend folder:
```env
MONGODB_URI=
JWT_SECRET=
PORT=
```

Then start the server:
```bash
npm run dev
```

### Step 3: Frontend setup
```bash
cd frontend
npm install
```

Create a `.env` file in the frontend folder:
```env
VITE_API_URL=
```

Start the app:
```bash
npm run dev
```

### Step 4: Open your browser!
Go to `http://localhost:5173` and you should see the login page!

## Features I'm proud of

- **Dashboard** - Shows all your tasks at a glance with charts and stats
- **Calendar View** - You can actually drag tasks to reschedule them!
- **Priority Levels** - High, Medium, Low (because not everything is urgent)
- **Subject Tags** - Filter by DSA, OS, OOPs,Network, etc.
- **Responsive** - Works on phone, tablet, laptop



---

**Note:** This is a learning project! The code might not be perfect, but it works and I'm constantly improving it. PRs and suggestions welcome! 🚀
