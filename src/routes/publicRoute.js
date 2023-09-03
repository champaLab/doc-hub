import { lazy } from "react";


export const PublicRoutes = [
    {
        name: 'Login',
        path: '/',
        element: lazy(() => import('../pages/login'))
    }
]