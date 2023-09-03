import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/app/home";
import { PublicRoutes } from "./routes/publicRoute";
import { AdminRoutes } from "./routes/adminRoute";
import PublicLayout from "./layouts/public";
import AdminLayout from "./layouts/admin";
import Loading from "./components/Loading";

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path='/' element={<PublicLayout />} >
                        {PublicRoutes.map((route, index) => (
                            <Route path={route.path} element={<route.element />} key={index + '-' + route.name} />
                        ))}
                    </Route>

                    <Route path='/app' element={<AdminLayout />} >
                        {AdminRoutes.map((route, index) => (
                            <Route path={route.path} element={<route.element />} key={index + '-' + route.name} />
                        ))}
                    </Route>

                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
