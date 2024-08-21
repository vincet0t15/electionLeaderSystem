import React, { useReducer, useState } from "react";
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
import { postReducer, INITIAL_STATE } from "./Reducer/postReducer";

export function BarangayCreate({ isOpen, isClose }) {
    const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

    const handleInputChange = (e) => {
        dispatch({
            type: "SET_FIELD",
            field: e.target.name,
            value: e.target.value,
        });
    };
    const storeBarangay = async () => {
        dispatch({ type: "SAVE_START" });
        try {
            const response = await apiClient.post("barangay");

            dispatch({ type: "SAVE_SUCCESS", payload: response.data });
        } catch (error) {
            dispatch({
                type: "SAVE_ERROR",
                payload: error.message || "Error occurred",
            });
        }
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
                            Create Barangay{" "}
                        </Typography>

                        <Input
                            onChange={handleInputChange}
                            name="barangay"
                            value={state.barangay || ""}
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
