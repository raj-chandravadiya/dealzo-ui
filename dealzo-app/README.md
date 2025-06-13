# Project Structure

my-react-app/
├── public/
│   └── index.html
├── src/
│   ├── assets/             # Static files (images, icons, fonts, etc.)
│   ├── components/         # Reusable UI components (buttons, cards, etc.)
│   │   └── Button/
│   │       ├── Button.jsx
│   │       └── Button.module.css
│   ├── pages/              # Page-level components for routing
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.module.css
│   │   └── About/
│   │       ├── About.jsx
│   │       └── About.module.css
│   ├── layouts/            # Shared layout components (e.g., Navbar, Footer)
│   ├── routes/             # React Router configuration
│   │   └── AppRoutes.jsx
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API services (e.g., axios calls)
│   ├── store/              # State management (e.g., Redux, Zustand)
│   ├── utils/              # Helper functions and utilities
│   ├── context/            # React Context providers
│   ├── constants/          # Constants (e.g., roles, configs, enums)
│   ├── App.jsx             # Root component
│   ├── main.jsx            # Entry point (for Vite) or index.js (for CRA)
│   └── index.css           # Global styles
├── .env                    # Environment variables
├── .gitignore
├── package.json
└── README.md


# Common Componants

**InputBox** --> Components/common/InputBox.jsx
