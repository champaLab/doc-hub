import { lazy } from "react";


export const AdminRoutes = [
    {
        path: '/',
        element: lazy(() => import('../pages/app/home')),
    },
    {
        path: '/report',
        element: lazy(() => import('../pages/app/report')),
    },
]