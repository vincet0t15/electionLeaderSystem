import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

export default function Index() {
    return (
        <div>
            <div className="relative">
                <NavBar />
                <div className="flex">
                    {/* Sidebar */}
                    <aside className="shadow-lg shadow-slate-900/20 fixed hidden md:block flex-shrink-0 z-10">
                        <SideBar />
                    </aside>

                    {/* Main content */}
                    <div className="flex-1 p-4 mt-12 lg:ml-60">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}
