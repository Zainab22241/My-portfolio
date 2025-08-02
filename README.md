# MERN Stack Portfolio Website

A modern, full-stack portfolio website built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring a sleek dark theme with electric blue and neon purple accents.

## Features

### Frontend
- **Modern React with TypeScript** - Type-safe development
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Interactive Animations** - Smooth scrolling, hover effects, and micro-interactions
- **Dark Theme** - Futuristic design with gradient accents
- **Real-time Data** - Dynamic content loaded from backend API

### Backend
- **RESTful API** - Express.js server with MongoDB
- **Authentication** - JWT-based auth with role-based access
- **Contact Form** - Email notifications with Nodemailer
- **Admin Panel** - Content management for projects, skills, and experience
- **File Upload** - Image handling for projects and profiles
- **Data Validation** - Mongoose schemas with validation

### Sections
- **Hero** - Animated introduction with social links
- **About** - Personal information and highlights
- **Skills** - Dynamic skill categories with progress bars
- **Experience** - Timeline of professional experience
- **Projects** - Showcase of featured projects with metrics
- **Contact** - Working contact form with email notifications

## Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Axios for API calls
- Custom hooks for state management

### Backend
- Node.js with Express.js
- MongoDB with Mongoose ODM
- JWT for authentication
- Bcrypt for password hashing
- Nodemailer for email functionality
- Multer for file uploads
- CORS for cross-origin requests

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   # Install frontend dependencies
   npm install
   
   # Install backend dependencies
   cd server
   npm install
   cd ..
   ```

3. **Environment Setup**
   ```bash
   # Copy environment files
   cp .env.example .env
   cp server/.env.example server/.env
   ```

4. **Configure Environment Variables**
   
   **Frontend (.env):**
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```
   
   **Backend (server/.env):**
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/portfolio
   JWT_SECRET=your_super_secret_jwt_key_here
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   CONTACT_EMAIL=your_contact_email@gmail.com
   ```

5. **Start the application**
   ```bash
   # Start both frontend and backend
   npm run dev:full
   
   # Or start separately
   npm run dev          # Frontend only
   npm run dev:server   # Backend only
   ```

6. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000/api

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/profile` - Update user profile

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (admin)
- `PUT /api/projects/:id` - Update project (admin)
- `DELETE /api/projects/:id` - Delete project (admin)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (admin)
- `PUT /api/contact/:id` - Update message status (admin)
- `DELETE /api/contact/:id` - Delete message (admin)

### Skills
- `GET /api/skills` - Get all skills
- `POST /api/skills` - Create skill (admin)
- `PUT /api/skills/:id` - Update skill (admin)
- `DELETE /api/skills/:id` - Delete skill (admin)

### Experience
- `GET /api/experience` - Get all experiences
- `POST /api/experience` - Create experience (admin)
- `PUT /api/experience/:id` - Update experience (admin)
- `DELETE /api/experience/:id` - Delete experience (admin)

## Database Schema

### User Model
```javascript
{
  username: String (required, unique),
  email: String (required, unique),
  password: String (required, hashed),
  role: String (enum: ['admin', 'user']),
  profile: {
    firstName: String,
    lastName: String,
    bio: String,
    avatar: String,
    location: String,
    website: String,
    github: String,
    linkedin: String,
    twitter: String
  }
}
```

### Project Model
```javascript
{
  title: String (required),
  description: String (required),
  image: String (required),
  tags: [String],
  features: [String],
  technologies: [String],
  metrics: {
    users: String,
    performance: String,
    uptime: String
  },
  links: {
    github: String,
    demo: String,
    website: String
  },
  status: String (enum),
  featured: Boolean,
  order: Number,
  createdBy: ObjectId (ref: User)
}
```

## Deployment

### Frontend (Netlify/Vercel)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Set environment variables in deployment platform

### Backend (Heroku/Railway/DigitalOcean)
1. Set up MongoDB Atlas or cloud database
2. Configure environment variables
3. Deploy the `server` folder
4. Update frontend API URL

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email your-email@example.com or create an issue in the repository.