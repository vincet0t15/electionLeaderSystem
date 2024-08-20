import React from "react";

export default function SideBar() {
    return (
        <div className="mt-14 h-screen w-full">
            <aside className="scrollbar-hide h-full w-full p-6 sm:w-60 dark:bg-gray-50 dark:text-gray-800 drop-shadow overflow-y-auto">
                <nav className="space-y-8 text-sm">
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">
                            Getting Started
                        </h2>
                        <div className="flex flex-col space-y-1">
                            <a
                                rel="noopener noreferrer"
                                href="#"
                                className="hover:font-bold hover:text-teal-600"
                            >
                                Installation
                            </a>
                            <a rel="noopener noreferrer" href="#">
                                Plugins
                            </a>
                            <a rel="noopener noreferrer" href="#">
                                Migrations
                            </a>
                            <a rel="noopener noreferrer" href="#">
                                Appearance
                            </a>
                            <a rel="noopener noreferrer" href="#">
                                Mamba UI
                            </a>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">
                            Dashboard
                        </h2>
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#">
                                Header
                            </a>
                            <a rel="noopener noreferrer" href="#">
                                Drawer
                            </a>
                            <a rel="noopener noreferrer" href="#">
                                Page Title
                            </a>
                            <a rel="noopener noreferrer" href="#">
                                Menus
                            </a>
                            <a rel="noopener noreferrer" href="#">
                                Sidebar
                            </a>
                            <a rel="noopener noreferrer" href="#">
                                Footer
                            </a>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">
                            Pages
                        </h2>
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#">
                                Homepage
                            </a>
                            <a rel="noopener noreferrer" href="#">
                                Users
                            </a>
                            <a rel="noopener noreferrer" href="#">
                                Tools
                            </a>
                            <a rel="noopener noreferrer" href="#">
                                Settings
                            </a>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-600">
                            Misc
                        </h2>
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#">
                                Tutorials
                            </a>
                            <a rel="noopener noreferrer" href="#">
                                Changelog
                            </a>
                        </div>
                    </div>
                </nav>
            </aside>
        </div>
    );
}
