import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/app/home";
import { PublicRoutes } from "./routes/publicRoute";
import { AdminRoutes } from "./routes/adminRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element >
                
                </Route> */}

        {PublicRoutes.map((route) => (
          <Route path={route.path} element={<route.element />} />
        ))}

        {AdminRoutes.map((route) => (
          <Route path={route.path} element={<route.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
