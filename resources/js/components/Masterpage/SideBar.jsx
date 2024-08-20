import React, { useEffect, useState } from "react";
import {
    HomeModernIcon,
    HomeIcon,
    UsersIcon,
    BuildingOfficeIcon,
    IdentificationIcon,
    UserPlusIcon,
    MapPinIcon,
    FingerPrintIcon,
    ArrowDownOnSquareStackIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export default function SideBar() {
    const [activeSidebar, setActiveSidebar] = useState(() => {
        return localStorage.getItem("active-sidebar");
    });

    const ClickActiveSideBar = (value) => {
        setActiveSidebar(value);
        localStorage.setItem("active-sidebar", value);
    };
    const [pages, setPages] = useState([
        {
            title: "General",
            children: [
                {
                    title: "Dashboard",
                    to: "dashboard",
                    icon: HomeIcon,
                    isLast: 0,
                },
                {
                    title: "Downline",
                    to: "downline",
                    icon: ArrowDownOnSquareStackIcon,
                    isLast: 0,
                },
                {
                    title: "Leaders",
                    to: "leaders",
                    icon: ArrowDownOnSquareStackIcon,
                    isLast: 0,
                },
            ],
        },

        {
            title: "Settings",
            children: [
                {
                    title: "Barangay",
                    to: "settings-barangay",
                    icon: MapPinIcon,
                    isLast: 0,
                },
                {
                    title: "Profile",
                    to: "settings-profile-list",
                    icon: UserPlusIcon,
                    isLast: 0,
                },
                {
                    title: "Precinct",
                    to: "settings-precint",
                    icon: BuildingOfficeIcon,
                    isLast: 0,
                },
                {
                    title: "Position",
                    to: "settings-position",
                    icon: IdentificationIcon,
                    isLast: 0,
                },
                {
                    title: "User",
                    to: "settings-users",
                    icon: UsersIcon,
                    isLast: 0,
                },
            ],
        },
    ]);

    useEffect(() => {
        const active = localStorage.getItem("active-sidebar");
        active
            ? localStorage.setItem("active-sidebar", active)
            : localStorage.setItem("active-sidebar", "dashboard");
        setActiveSidebar(active);
    }, [activeSidebar]);

    return (
        <div className="mt-14 h-screen w-full">
            <aside className="scrollbar-hide h-full w-full p-6 sm:w-60 dark:bg-gray-50 dark:text-gray-800 drop-shadow overflow-y-auto">
                <nav className="space-y-8 text-sm">
                    {pages.map((item, index) => (
                        <div className="space-y-2" key={index}>
                            <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">
                                {item.title}
                            </h2>
                            <div className="flex flex-col space-y-1">
                                {item.children.map((item, index) => (
                                    <NavLink
                                        to={item.to}
                                        onClick={() =>
                                            ClickActiveSideBar(item.to)
                                        }
                                        key={index}
                                        rel="noopener noreferrer"
                                        href="#"
                                        className={`${
                                            activeSidebar === item.to
                                                ? "text-teal-600 font-bold"
                                                : "hover:font-bold hover:text-teal-600"
                                        } `}
                                    >
                                        {item.title}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    ))}
                </nav>
            </aside>
        </div>
    );
}
