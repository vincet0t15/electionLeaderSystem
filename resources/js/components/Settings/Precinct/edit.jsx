import React from "react";
import {
    Button,
    Dialog,
    Card,
    CardBody,
    CardFooter,
    Typography,
    Input,
} from "@material-tailwind/react";

export function PrecenctEdit({ isOpen, isClose, dataToEdit }) {
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
                            Edit Barangay
                        </Typography>

                        <Input label="Barangay" color="teal" size="md" />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button
                            color="teal"
                            onClick={isClose}
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
