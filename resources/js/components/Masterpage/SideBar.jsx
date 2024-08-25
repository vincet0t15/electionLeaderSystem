import React, { useEffect, useState } from "react";
import {
    HomeIcon,
    UsersIcon,
    BuildingOfficeIcon,
    IdentificationIcon,
    UserPlusIcon,
    MapPinIcon,
    ArrowDownOnSquareStackIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export default function SideBar() {
    const [activeSidebar, setActiveSidebar] = useState(() => {
        return localStorage.getItem("active-sidebar") || "dashboard";
    });

    useEffect(() => {
        localStorage.setItem("active-sidebar", activeSidebar);
    }, [activeSidebar]);

    const pages = [
        {
            title: "General",
            children: [
                {
                    title: "Dashboard",
                    to: "dashboard",
                    icon: HomeIcon,
                },
                {
                    title: "Downline",
                    to: "downline",
                    icon: ArrowDownOnSquareStackIcon,
                },
                {
                    title: "Leaders",
                    to: "leaders",
                    icon: ArrowDownOnSquareStackIcon,
                },
            ],
        },
        {
            title: "Settings",
            children: [
                {
                    title: "Barangay",
                    to: "settings/barangay",
                    icon: MapPinIcon,
                },
                {
                    title: "Profile",
                    to: "settings-profile-list",
                    icon: UserPlusIcon,
                },
                {
                    title: "Precinct",
                    to: "settings/precinct",
                    icon: BuildingOfficeIcon,
                },
                {
                    title: "Position",
                    to: "settings-position",
                    icon: IdentificationIcon,
                },
                {
                    title: "User",
                    to: "settings-users",
                    icon: UsersIcon,
                },
            ],
        },
    ];

    return (
        <div className="mt-14 h-screen w-full">
            <aside className="scrollbar-hide h-full w-full p-6 sm:w-60 text-gray-800 drop-shadow overflow-y-auto">
                <nav className="space-y-8 text-sm">
                    {pages.map((item, index) => (
                        <div className="space-y-2" key={index}>
                            <h2 className="text-sm font-semibold tracking-widest uppercase text-gray-700">
                                {item.title}
                            </h2>
                            <div className="flex flex-col space-y-1 text-gray-700 tracking-wide">
                                {item.children.map((child, childIndex) => (
                                    <NavLink
                                        key={childIndex}
                                        to={child.to}
                                        onClick={() =>
                                            setActiveSidebar(child.to)
                                        }
                                        className={`${
                                            activeSidebar === child.to
                                                ? "text-teal-600 font-bold"
                                                : "hover:font-bold hover:text-teal-600"
                                        } flex items-center space-x-2`}
                                    >
                                        <child.icon className="h-5 w-5" />
                                        <span>{child.title}</span>
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
