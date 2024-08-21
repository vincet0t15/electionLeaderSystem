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

export function BarangayCreate({ isOpen, isClose }) {
    const [form, setForm] = useState({
        barangay: "",
    });

    const storeBarangay = async () => {
        const response = await apiClient.post("barangay", form);
        console.log(response);
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
                            Create Barangay
                        </Typography>

                        <Input
                            label="Barangay"
                            color="teal"
                            size="md"
                            className="tracking-widest"
                        />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button
                            color="teal"
                            onClick={storeBarangay}
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
