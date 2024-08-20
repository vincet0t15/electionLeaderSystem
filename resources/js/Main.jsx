import React, { useEffect } from "react";
import MyRoutes from "./components/router/myRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";

export default function Main() {
    return (
        <div>
            <MyRoutes></MyRoutes>
        </div>
    );
}

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(
    <Router>
        <Main />
    </Router>
);
