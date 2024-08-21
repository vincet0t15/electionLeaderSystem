import {
    Button,
    Card,
    Typography,
    Alert,
    Input,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { React, useState } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";

export default function Login() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({
        username: "",
        password: "",
    });

    const [alertMessage, setAlertMessage] = useState({
        isShow: false,
        status: "",
        message: "",
    });

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    function closeAlertData() {
        setTimeout(() => {
            setAlertMessage({
                isShow: false,
                status: "",
                message: "",
            });
        }, 5000);
    }

    const Login = () => {
        setIsLoading(true);
        axios.get("/sanctum/csrf-cookie").then(() => {
            axios
                .post("/api/login", formData)
                .then((response) => {
                    setAlertMessage({
                        isShow: true,
                        status: response.data.status,
                        message: response.data.message,
                    });

                    closeAlertData();

                    localStorage.setItem("e-listahan", response.data.token);

                    setIsLoading(false);
                    window.location.href = "/dashboard";
                })
                .catch((error) => {
                    setAlertMessage({
                        isShow: true,
                        status: "error",
                        message: "Login error",
                    });
                    closeAlertData();
                    setIsLoading(false);
                    setErrors({
                        username: error.response.data.errors.username,
                        password: error.response.data.errors.password,
                    });
                });
        });
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            Login();
        }
    };
    return (
        <>
            {alertMessage.isShow ? (
                <div className="right-0 fixed z-50 w-1/4 m-2">
                    <Alert
                        icon={
                            alertMessage.status === "success" ? (
                                <CheckCircleIcon className="w-6 h-6" />
                            ) : alertMessage.status === "error" ? (
                                <XCircleIcon className="w-6 h-6" />
                            ) : (
                                ""
                            )
                        }
                        color={
                            alertMessage.status === "success"
                                ? "green"
                                : alertMessage.status === "error"
                                ? "red"
                                : "blue"
                        }
                    >
                        {alertMessage.message}
                    </Alert>
                </div>
            ) : (
                ""
            )}
            <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="w-full max-w-md text-center lg:w-80">
                    <Card color="transparent" shadow={false}>
                        <div className="flex justify-center items-center">
                            <img
                                className="h-36 w-36 rounded-full object-cover object-center"
                                src="/Logo/LGU.png"
                                alt="nature image"
                            />
                        </div>
                        <Typography
                            variant="h4"
                            color="blue-gray"
                            className="text-blue-500"
                        >
                            E-LISTAHAN
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            <span className="font-bold">Welcome!</span> Enter
                            your details to login.
                        </Typography>
                        <form className="mt-6 ">
                            <div className="mb-4 text-left">
                                <Input
                                    error={errors.username ? true : false}
                                    label="Username"
                                    color="teal"
                                    onChange={handleChange}
                                    onKeyDown={handleKeyPress}
                                    name="username"
                                    value={formData.username}
                                />
                            </div>
                            <div className="mb-4 text-left">
                                <Input
                                    type="password"
                                    error={errors.password ? true : false}
                                    label="Password"
                                    color="teal"
                                    onChange={handleChange}
                                    onKeyDown={handleKeyPress}
                                    name="password"
                                    value={formData.password}
                                />
                            </div>

                            <div className="text-center mt-2">
                                <Button
                                    loading={isLoading}
                                    color="teal"
                                    onClick={Login}
                                    size="md"
                                    className=" w-full flex items-center justify-center text-white font-semibold rounded-md hover:bg-teal-600 focus:outline-none focus:bg-teal-600 text-center"
                                >
                                    Login
                                </Button>
                            </div>

                            <div className="text-center mt-2">
                                <p>
                                    Dont have any account?{" "}
                                    <Link to="/register" className="font-bold">
                                        Register
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </>
    );
}
