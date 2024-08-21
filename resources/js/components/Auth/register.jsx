import {
    Alert,
    Button,
    Card,
    Input,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { React, useState, useEffect } from "react";
import axios from "axios";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

import apiClient from "../../apiClient";
export default function Register() {
    const [error, setError] = useState({});
    const [saving, setSaving] = useState(false);
    const [alertMessage, setAlertMessage] = useState({
        isShow: false,
        status: "",
        message: "",
    });

    const [formData, setformData] = useState({
        name: "",
        username: "",
        password: "",
        password_confirmation: "",
    });

    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const register = () => {
        setSaving(true);
        console.log(formData);
        axios
            .post("/api/register", formData)
            .then((response) => {
                setAlertMessage({
                    isShow: true,
                    status: response.data.status,
                    message: response.data.message,
                });
                AlertMessageClose();
                setformData({
                    name: "",
                    username: "",
                    password: "",
                    password_confirmation: "",
                });
                setSaving(false);
            })
            .catch((error) => {
                setSaving(false);
                setError(error.response.data.errors);
            });
    };

    const AlertMessageClose = () => {
        setTimeout(() => {
            setAlertMessage({
                isShow: false,
                status: "",
                message: "",
            });
        }, 5000);
    };

    return (
        <div className="">
            {alertMessage.isShow ? (
                <div className="right-0 fixed  z-50 w-1/4 m-2">
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
                        <Typography variant="h4" color="teal">
                            E-LISTAHAN
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            <span className="font-bold">Welcome!</span> Enter
                            your details to register.
                        </Typography>
                        <form className="mt-6 justify-center items-center">
                            <div className="mb-4">
                                <Input
                                    color="teal"
                                    size="md"
                                    error={error.name ? true : false}
                                    label="Name"
                                    value={formData.name}
                                    name="name"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4">
                                <Input
                                    color="teal"
                                    size="md"
                                    error={error.username ? true : false}
                                    label="Username"
                                    value={formData.username}
                                    name="username"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <Input
                                    color="teal"
                                    size="md"
                                    error={error.password ? true : false}
                                    type="password"
                                    label="Password"
                                    value={formData.password}
                                    name="password"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-4">
                                <Input
                                    error={
                                        error.password_confirmation
                                            ? true
                                            : false
                                    }
                                    type="password"
                                    label="Confirm-Password"
                                    value={formData.password_confirmation}
                                    name="password_confirmation"
                                    onChange={handleChange}
                                    color="teal"
                                    size="md"
                                />
                            </div>
                            <div className="text-center mt-2">
                                <Button
                                    loading={saving}
                                    color="teal"
                                    onClick={register}
                                    size="md"
                                    className="flex text-center items-center justify-center w-full text-white font-semibold rounded-md hover:bg-teal-600 focus:outline-none focus:bg-blue-600"
                                >
                                    Register
                                </Button>
                            </div>
                            <div className="text-center mt-2">
                                <p>
                                    Already have any account?
                                    <Link to="/login" className="font-bold">
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
}
