# JobSearch Pro – Full Stack Job Portal Application
A full-stack modern job portal where users can register, complete onboarding, apply to jobs, post job listings, track their applications, and more. Built using **React.js, Tailwind CSS, Supabase, Clerk, and integrated with Sentry for real-time error monitoring.**

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Live Demo](#live-demo)
- [Future Improvements](#future-improvements)

## Features
<ul> 
  <li>Clerk-based Authentication (Signup/Login with session security)</li>
  <li>Protected Routes and Onboarding Flow</li> <li>Post Jobs with detailed forms and validation</li> 
  <li>Apply for Jobs and Track Application Status</li>
  <li>Save & Unsave Job Listings</li>
  <li>View Created Jobs and Manage Listings</li> 
  <li>Powerful Search and Filters for Jobs</li> <li>Responsive Design using Tailwind & Shadcn UI</li> 
  <li>Real-time Error Tracking using Sentry</li> 
</ul>

## Tech Stack

### Frontend
<ul> 
  <li>React.js – for SPA development</li> <li>Tailwind CSS – utility-first styling framework</li> 
  <li>Shadcn UI – pre-styled React components</li>
  <li>React Hook Form + Zod – form handling and validation</li>
  <li>Sentry – real-time error tracking and monitoring</li>
</ul>

### Backend & Services
<ul> 
  <li>Supabase – database and auth backend</li> <li>Clerk – authentication, user management, and sessions</li>
  <li>Vite – fast bundler for React app</li> </ul>
  
## Installation

### Prerequisites
<ul> 
  <li>Node.js & npm</li>
  <li>Supabase Project Setup</li>
  <li>Clerk Project Setup</li>
  <li>Sentry Account for Monitoring</li> 
</ul> <prev>
  
### Clone the Repository
git clone https://github.com/DHANDEAJAYKUMAR/JOBSEARCH-PRO.git
```
cd jobsearch-pro
npm install
npm run dev
```
**Note**: Create .env file with the following:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
VITE_CLERK_PUBLISHABLE_KEY=Your_Publishable_key

```
## Usage
<ul>
  <li>Open your browser and visit the local URL displayed in terminal</li>
  <li>Register or Login using Clerk</li> <li>Complete onboarding with your details and resume</li> 
  <li>Apply to jobs or post new job listings</li> 
  <li>Use dashboard to track saved and applied jobs</li>
  <li>Monitor app errors with Sentry integration</li> 
</ul>

## Project Structure
jobsearch-pro/

<pre>
jobsearch-pro/
│
├── public/                     # Static assets like index.html, favicon, etc.
│
├── src/                        # Core source directory
│   ├── api/                    # API interaction and service layers
│   ├── components/             # Reusable UI components
│   ├── data/                   # Static data or config data
│   ├── hooks/                  # Custom React hooks (data fetching, auth, etc.)
│   ├── layout/                 # Layouts like Navbar, Footer, AppShell
│   ├── lib/                    # Supabase, Clerk, and Sentry client logic
│   ├── pages/                  # Route components (Home, Jobs, Apply, etc.)
│   ├── utils/                  # Utility functions/helpers
│   ├── App.jsx                 # Main root component with routing
│   ├── main.jsx                # App entry point
│   ├── index.css               # Tailwind base styles
│   ├── app.css                 # Custom app styles
│
├── .eslintrc.cjs               # ESLint config
├── .gitignore                  # Git ignore rules
├── components.json             # UI Component registry
├── index.html                  # Root HTML file
├── jsconfig.json               # JS project configuration
├── package.json                # Project metadata and scripts
├── package-lock.json / yarn.lock  # Dependency lock files
├── postcss.config.js           # PostCSS config for Tailwind
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite bundler configuration
├── vercel.json                 # Deployment configuration for Vercel
</pre>


## **Live Demo**
<p>Try it Live Here → <a href="https://jobsearch-pro.vercel.app/">https://jobsearch-pro.vercel.app/</a></p>

**Demo Video**
→ <a href="https://drive.google.com/file/d/1fyc2-18feRdJ13zPzJSYcuSvK4Itms08/view?usp=drive_link">Click to Open</a>

## Future Improvements
<ul> 
  <li>Email Notifications and Reminders</li> 
  <li>Resume Parsing for Smart Application</li> 
  <li>PWA Support for Mobile Use</li>
  <li>Company Reviews and Ratings</li>
</ul>
