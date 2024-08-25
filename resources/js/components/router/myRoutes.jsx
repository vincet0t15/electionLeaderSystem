import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// AUTHENTICATION
import Login from "../Auth/login";
import Register from "../Auth/register";

// MAIN
import Index from "../Masterpage";
import Dashboard from "../Masterpage/Dashboard";

// PROTECTED ROUTES
import GuestRoute from "./GuestRoute";
import PrivateRoute from "./ProtectedRoute";
import Settings from "../Settings";

// SETTINGS
import BarangayIndex from "../Settings/Barangay";
import PrecentIndex from "../Settings/Precinct";

export default function MyRoutes() {
    return (
        <Routes>
            <Route element={<PrivateRoute />}>
                <Route exact path="/" element={<Index />}>
                    <Route
                        exact
                        path="/"
                        element={<Navigate to="dashboard" />}
                    />
                    <Route exact path="dashboard" element={<Dashboard />} />

                    <Route path="/settings/" element={<Settings />}>
                        <Route
                            exact
                            path="/settings/"
                            element={<Navigate to="barangay" />}
                        />
                        <Route path="barangay" element={<BarangayIndex />} />
                        <Route path="precinct" element={<PrecentIndex />} />
                    </Route>
                </Route>
            </Route>

            <Route element={<GuestRoute />}>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="register" element={<Register />} />
            </Route>
        </Routes>
    );
}
