# ReferralHub - Frontend

A modern, responsive employee referral management system built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Authentication System**: Secure login and signup with JWT-based authentication
- **Dashboard**: Real-time referral tracking and analytics
- **Candidate Management**: Add, view, update, and delete candidate referrals
- **Status Tracking**: Monitor candidates through Pending, Reviewed, and Hired stages
- **Search & Filter**: Find referrals by job title and filter by status
- **Activity Feed**: Real-time updates on referral activities
- **Responsive Design**: Fully responsive UI that works on all devices
- **Modern UI**: Beautiful gradient designs with glassmorphism effects

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **React Toastify** - Toast notifications
- **Lucide React** - Icon library
- **Day.js** - Date manipulation
- **JWT Decode** - JWT token decoding

## 📋 Prerequisites

- Node.js (v20.19.0 or higher recommended)
- npm or yarn package manager

## 🔧 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the root directory:
```env
VITE_API_URL=https://backend-nine-mu-93.vercel.app
```

4. **Start the development server**
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure
```
frontend/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, icons, etc.
│   ├── components/     # Reusable components
│   │   ├── Dashboard/  # Dashboard-specific components
│   │   └── ProtectedRoute.jsx
│   ├── Context/        # React Context providers
│   │   ├── AuthContext.jsx
│   │   └── CandidateContext.jsx
│   ├── Modals/         # Modal components
│   │   └── AddReferralModal.jsx
│   ├── pages/          # Page components
│   │   ├── Dashboard.jsx
│   │   ├── LandingPage.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── .env                # Environment variables
├── index.html          # HTML template
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
└── vite.config.js      # Vite configuration
```

## 🔐 Authentication Flow

1. User signs up with name, email, and password
2. User logs in with credentials
3. JWT token is stored in localStorage
4. Protected routes check for authentication
5. User data is managed through AuthContext

## 🎨 Key Components

### Dashboard Components

- **Sidebar** - Navigation menu with user profile
- **TopBar** - Header with notifications and "New Referral" button
- **StatsCard** - Displays referral statistics
- **CandidateCard** - Individual candidate information card
- **SearchFilter** - Search and filter candidates
- **ActivityFeed** - Recent activity timeline
- **PerformanceMetrics** - Performance tracking

### Context Providers

- **AuthContext** - Manages authentication state and operations
- **CandidateContext** - Manages candidate data and CRUD operations

## 🔄 API Integration

The frontend communicates with the backend API for:
- User authentication (login/signup)
- Fetching candidate referrals
- Adding new referrals with file upload
- Updating candidate status
- Deleting candidates

## 🎯 Key Features Implementation

### Protected Routes
Routes are protected using the `ProtectedRoute` component that checks for authentication before rendering.

### File Upload
Resume upload functionality supports PDF files only with validation.

### Real-time Updates
The application fetches latest data after operations like add, update, or delete.

### Toast Notifications
User feedback is provided through toast notifications for all operations.

## 🌐 Deployment

The application is configured for deployment on Vercel:

1. **Build the application**
```bash
npm run build
```

2. **Deploy to Vercel**
```bash
vercel deploy
```

The `vercel.json` configuration handles client-side routing.

## 🔒 Security Features

- JWT-based authentication
- Protected routes
- Secure HTTP-only cookies
- Input validation
- XSS protection through React's built-in sanitization

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

## 🎨 Styling

- Tailwind CSS for utility-first styling
- Custom gradient backgrounds
- Glassmorphism effects
- Smooth transitions and animations
- Dark theme with vibrant accents

## 🐛 Troubleshooting

**Port already in use:**
```bash
# Kill the process using port 5173
npx kill-port 5173
```

**Environment variables not loading:**
- Ensure `.env` file is in the root directory
- Restart the dev server after changes
- Variables must start with `VITE_`

**Build errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 👥 Support

For support, email support@referralhub.com or open an issue in the repository.

## 🔮 Future Enhancements

- [ ] Email notifications
- [ ] Advanced analytics dashboard
- [ ] Bulk candidate upload
- [ ] Export data to CSV/PDF
- [ ] Integration with HR systems
- [ ] Mobile app version
- [ ] Dark/Light theme toggle
- [ ] Multi-language support

---

**Built with ❤️ by the ReferralHub Team**