import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Typography,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    Cog8ToothIcon,
    InboxIcon,
    ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import apiClient from "../../apiClient";
export default function UserSettings() {
    const navigate = useNavigate();
    const logout = () => {
        apiClient
            .post("logout")
            .then((response) => {
                localStorage.removeItem("active-sidebar");
                localStorage.removeItem("e-filing-system");
                navigate("/login");
            })
            .catch((errors) => {
                console.log(errors);
            });
    };

    return (
        <Menu className="justify-end">
            <MenuHandler>
                <Avatar
                    variant="circular"
                    alt="tania andrew"
                    className="h-9 w-9 cursor-pointer m-2"
                    src={"/Images/User.png"}
                />
            </MenuHandler>
            <MenuList>
                <MenuItem className="flex items-center gap-2 hover:bg-white">
                    <UserCircleIcon fill="none" className="w-5 h-5" />
                    <Typography variant="small" className="font-medium">
                        My Profile
                    </Typography>
                </MenuItem>
                <MenuItem className="flex items-center gap-2">
                    <Cog8ToothIcon fill="none" className="w-5 h-5" />
                    <Typography variant="small" className="font-medium">
                        Edit Profile
                    </Typography>
                </MenuItem>
                <MenuItem className="flex items-center gap-2">
                    <InboxIcon fill="none" className="w-5 h-5" />
                    <Typography variant="small" className="font-medium">
                        Inbox
                    </Typography>
                </MenuItem>

                <hr className="my-2 border-blue-gray-50" />
                <MenuItem className="flex items-center gap-2" onClick={logout}>
                    <ArrowRightCircleIcon className="w-6 h-6 text-red-500" />
                    <Typography
                        variant="small"
                        className="font-medium"
                        color="red"
                    >
                        Sign Out
                    </Typography>
                </MenuItem>
            </MenuList>
        </Menu>
    );
}
