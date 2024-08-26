import React, { useEffect } from "react";
import MyRoutes from "./components/router/myRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
// import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
export default function Main() {
    return (
        <div>
            <MyRoutes></MyRoutes>
        </div>
    );
}

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);
const queryClient = new QueryClient();

root.render(
    <Router>
        <QueryClientProvider client={queryClient}>
            <Main />
        </QueryClientProvider>
    </Router>
);
