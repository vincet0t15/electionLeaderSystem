import React, { useEffect, useState } from "react";
import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
} from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import apiClient from "../../../apiClient";
import AlertMessage from "../../../Alert";

export function PrecenctEdit({ isOpen, isClose, onSaved, dataToEdit }) {
    const [alertData, setAlertData] = useState({
        isShow: false,
        message: "",
        status: "",
    });

    const [error, setError] = useState({});

    const [formData, setFormData] = useState({
        id: "",
        precinct: "",
    });

    useEffect(() => {
        setFormData({
            id: dataToEdit.id || "",
            precinct: dataToEdit.precinct || "",
        });
    }, [dataToEdit]);

    const mutation = useMutation({
        mutationFn: (updatedPrecinct) => {
            return apiClient.patch(
                "precinct/" + updatedPrecinct.id,
                updatedPrecinct
            );
        },
        onSuccess: ({ data }) => {
            setFormData({
                precinct: "",
            });
            setAlertData({
                isShow: true,
                message: data.message,
                status: data.status,
            });
            onSaved();
            isClose();
        },
        onError: (error) => {
            setError(error.response.data.errors);
        },
    });

    const handleSubmit = () => {
        mutation.mutate(formData);
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
                                Edit Precinct
                            </Typography>

                            <Input
                                error={error.precinct ? true : false}
                                name="precinct"
                                value={formData.precinct}
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
                            loading={mutation.isPending}
                            color="teal"
                            onClick={handleSubmit}
                            fullWidth
                            className="tracking-widest justify-center items-center"
                        >
                            save changes
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}
