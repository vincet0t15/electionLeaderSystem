import React, { useState } from "react";
import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
} from "@material-tailwind/react";
import apiClient from "../../../apiClient";
import AlertMessage from "../../../Alert";

export function PrecenctCreate({ isOpen, isClose, onSaved }) {
    const [error, setError] = useState({});
    const [formData, setFormData] = useState({
        precinct: "",
    });
    const [loading, setLoading] = useState(false);
    const [alertData, setAlertData] = useState({
        isShow: false,
        message: "",
        status: "",
    });

    const storePrecinct = async () => {
        setLoading(true);
        try {
            const response = await apiClient.post("precinct", formData);
            onSaved();
            setAlertData({
                isShow: true,
                message: response.data.message,
                status: response.data.status,
            });
            setFormData({
                precinct: "",
            });
            setLoading(false);
            isClose();
        } catch (error) {
            setLoading(false);
            setError(error.response.data.errors);
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <>
            <AlertMessage
                alertData={alertData}
                isClose={() =>
                    setAlertData({ isShow: false, message: "", status: "" })
                }
            />
            <Dialog
                size="xs"
                open={isOpen}
                handler={isClose}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardBody className="flex flex-col gap-4">
                        <div>
                            <Typography
                                color="blue-gray"
                                className="mb-4 uppercase text-gray-700 font-semibold tracking-widest"
                            >
                                Create Precinct
                            </Typography>

                            <Input
                                error={error.precinct ? true : false}
                                value={formData.precinct}
                                name="precinct"
                                onChange={handleInputChange}
                                label="Precinct"
                                color="teal"
                                size="md"
                            />
                            <span className="text-red-500 tracking-wide text-sm">
                                {error.precinct}
                            </span>
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button
                            color="teal"
                            onClick={storePrecinct}
                            fullWidth
                            className="tracking-widest"
                        >
                            Create
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}
