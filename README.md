# Promorang

**Promorang** is a task-based social media engagement platform that connects businesses (merchants) with influencers and regular users to complete tasks such as liking, sharing, commenting, and creating content. In return, users earn rewards, and businesses get the social media engagement they need.

## Table of Contents

1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Endpoints](#api-endpoints)
6. [Contributing](#contributing)
7. [License](#license)

## Features

- **Task Creation & Management**: Merchants can create tasks (like, share, comment, post reviews) with engagement goals and quotas.
- **User Engagement**: Users can browse and complete tasks to earn rewards such as tokens, cash, or products.
- **Merchant Dashboard**: Merchants can view real-time analytics on task performance, including likes, shares, comments, and completion rates.
- **User Wallet**: Users can track rewards, balance, and transaction history in their wallet.
- **Real-Time Updates**: The platform supports real-time updates for tasks and analytics.
- **Role-Based Access**: Role-based access control (RBAC) ensures that admins, merchants, and users have appropriate permissions.

## Tech Stack

- **Front-End**: React.js / Vue.js / Next.js (pick the framework you use)
- **Back-End**: Node.js with Express.js / Supabase for API
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Auth0 for user authentication
- **Real-Time**: Supabase WebSockets for real-time updates
- **Payment Integration**: Stripe / PayPal for payment processing
- **Deployment**: Vercel / Netlify for front-end, Supabase handles the back-end

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Supabase Account](https://supabase.io/) for database setup
- [Auth0 Account](https://auth0.com/) for authentication

- Usage
For Users
Sign Up/Login: Users can sign up using email or social media accounts (via Auth0).
Complete Tasks: Browse tasks, complete them, and earn rewards.
Track Progress: Use the dashboard to view completed tasks and rewards earned.
For Merchants
Create Tasks: Merchants can create tasks, set engagement goals, and define rewards.
Monitor Performance: View real-time analytics on task performance and engagement metrics.
API Endpoints
Users
GET /api/tasks - Fetch available tasks for the user.
POST /api/tasks/complete - Submit task completion.
Merchants
POST /api/tasks/create - Create a new task.
GET /api/tasks/:id/analytics - Fetch task analytics.
Admins
GET /api/admin/users - View all users.
POST /api/admin/block-user - Block a user from accessing tasks.
Contributing
If you'd like to contribute to Promorang, follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a Pull Request.

### Clone the Repository

```bash
git clone https://github.com/yourusername/promorang.git
cd promorang
