import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";

const GuestRoute = () => {
    const token = localStorage.getItem("e-listahan");
    let auth = { token: token };

    return auth.token ? <Navigate to="/create-document" /> : <Outlet />;
};

export default GuestRoute;
