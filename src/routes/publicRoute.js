import { lazy } from "react";


export const PublicRoutes = [
    {
        path: '/',
        element: lazy(() => import('../pages/login'))
    }
]