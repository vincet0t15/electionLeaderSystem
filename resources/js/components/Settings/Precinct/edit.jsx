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
import { useMutation } from "@tanstack/react-query";

export function PrecenctEdit({ isOpen, isClose }) {
    const [formData, setFormData] = useState({
        precinct: "",
    });
    const mutation = useMutation({
        mutationFn: (newPrecinct) => {
            console.log(newPrecinct);
            // return axios.post("/api/precincts", newPrecinct);
        },
        onSuccess: () => {
            isClose();
        },
        onError: (error) => {
            // Handle error, e.g., showing an error message
            console.error("Error creating precinct:", error);
        },
    });

    const handleSubmit = () => {
        mutation.mutate({ precinct: formData.precinct });
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return (
        <>
            <Dialog
                size="xs"
                open={isOpen}
                handler={isClose}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardBody className="flex flex-col gap-4">
                        <Typography
                            color="blue-gray"
                            className="uppercase text-gray-700 font-semibold tracking-widest"
                        >
                            Create Precinct
                        </Typography>

                        <Input
                            label="Precinct"
                            color="teal"
                            size="md"
                            onChange={handleInputChange}
                            name="precinct"
                            value={formData.precinct}
                        />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button
                            color="teal"
                            onClick={handleSubmit}
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
