import { lazy } from "react";


export const AdminRoutes = [
    {
        path: '/app',
        element: lazy(() => import('../pages/app/home')),
    },
    {
        path: 'app//report',
        element: lazy(() => import('../pages/app/report')),
    },
]