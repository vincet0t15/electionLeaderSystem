import React, { useRef } from "react";
import {
    Navbar,
    Typography,
    IconButton,
    Avatar,
    Drawer,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import SideBar from "./SideBar";
import UserSettings from "./User";

export default function NavBar() {
    const boxRef = useRef();
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    return (
        <>
            <div className="relative z-30">
                <Navbar className="fixed top-0 z-30 h-max max-w-full mx-auto max-w-none rounded-none px-4 py-0.1">
                    <div className="flex items-center justify-between text-blue-gray-900">
                        <div className="lg:hidden">
                            <IconButton
                                variant="text"
                                color="blue-gray"
                                className="lg:hidden"
                                onClick={() => setOpenNav(!openNav)}
                            >
                                {openNav ? (
                                    <XMarkIcon
                                        className="h-6 w-6"
                                        strokeWidth={2}
                                    />
                                ) : (
                                    <Bars3Icon
                                        className="h-6 w-6"
                                        strokeWidth={2}
                                    />
                                )}
                            </IconButton>
                        </div>

                        <div className="flex items-center ">
                            <Typography
                                as="a"
                                href="#"
                                variant="h6"
                                className="mr-4 cursor-pointer py-1.5 lg:ml-2 flex items-center"
                            >
                                <Avatar
                                    className="mr-2 h-9 w-9"
                                    src={"/Logo/LGU.png"}
                                    alt="avatar"
                                />
                                LGU-SAN VICENTE
                            </Typography>
                        </div>

                        <div className="lg:flex  justify-end">
                            <div className="flex justify-end">
                                <UserSettings />
                            </div>
                        </div>
                    </div>
                </Navbar>

                <div className="shadow:md fixed h-full bg-white flex justify-center items-center ">
                    <Drawer
                        open={openNav}
                        onClose={() => setOpenNav(false)}
                        className="w-60"
                    >
                        <SideBar />
                    </Drawer>
                </div>
            </div>
        </>
    );
}
