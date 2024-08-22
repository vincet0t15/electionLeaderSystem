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
import AlertMessage from "../../../Alert";
export function BarangayCreate({ isOpen, isClose, onSaved }) {
    const [state, dispatch] = useReducer(postReducer, INITIAL_STATE);

    const handleInputChange = (e) => {
        dispatch({
            type: ACTION_TYPES.SET_FIELD,
            payload: { name: e.target.name, value: e.target.value },
        });
    };

    const storeBarangay = async () => {
        dispatch({ type: ACTION_TYPES.SAVE_START });

        try {
            const response = await apiClient.post("barangay", state.form);

            dispatch({
                type: ACTION_TYPES.SAVE_SUCCESS,
                payload: response.data,
            });

            onSaved();
            isClose();
        } catch (error) {
            dispatch({
                type: ACTION_TYPES.FETCH_ERROR,
                payload: error.response.data.errors,
            });
        }
    };
    return (
        <>
            <AlertMessage
                ALertData={state.alertData}
                isCLose={() => dispatch({ type: ACTION_TYPES.CLEAR_ALERT })}
            />

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
                            error={state.error.barangay ? true : false}
                            onChange={handleInputChange}
                            name="barangay"
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
