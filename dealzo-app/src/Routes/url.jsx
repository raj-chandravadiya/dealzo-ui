import { lazy } from "react";

// src/routes/url.jsx
const Login = lazy('@pages/Login.jsx');
const Register = lazy('@pages/Register.jsx');
const Dashboard = lazy('@pages/Dashboard.jsx');
const Profile = lazy('@pages/Profile.jsx');

const PUBLIC_URLS = [
   {url:"/login", element:<Login/>},
   {url:"/register", element:<Register/>},
    {url:"/dashboard", element:<Dashboard/>},
];

const PRIVATE_URLS = [
   {url:"/profile", element:<Profile/>},
];


export { PUBLIC_URLS, PRIVATE_URLS };
