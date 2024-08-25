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

export function PrecenctCreate({ isOpen, isClose }) {
    const [formData, setFormData] = useState({
        precinct: "",
    });

    const storePrecinct = async () => {
        try {
            const response = await apiClient.post("precinct", formData);
            console.log(response);
        } catch (error) {
            //
        }
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
                            value={formData.precinct}
                            name="precinct"
                            onChange={handleInputChange}
                            label="Precinct"
                            color="teal"
                            size="md"
                        />
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
