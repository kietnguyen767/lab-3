import Login from "../pages/Login.jsx/Login";
import Register from "../pages/Register/Register";

export const routes = [
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
]