import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
    const token = localStorage.getItem("e-listahan");
    let auth = { token: token };

    return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
