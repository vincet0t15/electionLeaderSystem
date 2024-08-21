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
import { ACTION_TYPES } from "../../../actionType";
export function BarangayCreate({ isOpen, isClose }) {
    const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

    const handleInputChange = (e) => {
        dispatch({
            type: ACTION_TYPES.SET_FIELD,
            field: e.target.name,
            value: e.target.value,
        });
    };
    const storeBarangay = async () => {
        dispatch({ type: ACTION_TYPES.SAVE_START });
        console.log(state.saving);
        try {
            const response = await apiClient.post("barangay");

            dispatch({
                type: ACTION_TYPES.SAVE_SUCCESS,
                payload: response.data,
            });
            isClose();
        } catch (error) {
            dispatch({
                type: ACTION_TYPES.FETCH_ERROR,
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
                            Create Barangay
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
                            loading={state.saving}
                            color="teal"
                            onClick={storeBarangay}
                            fullWidth
                            className="tracking-widest justify-center items-center"
                        >
                            Create
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}
