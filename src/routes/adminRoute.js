import { Home, Report } from "@mui/icons-material";
import { lazy } from "react";


export const AdminRoutes = [
    {
        name: 'Home',
        path: '/app',
        element: lazy(() => import('../pages/app/home')),
        icon: Home
    },
    {
        name: 'Report',
        path: '/app/report',
        element: lazy(() => import('../pages/app/report')),
        icon: Report,
    },
    {
        name: 'Test',
        path: '/app/test',
        element: lazy(() => import('../pages/app/test')),
        icon: Report,
    },
]