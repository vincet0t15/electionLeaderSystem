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
import { barangayEditReducer, INITIAL_STATE_EDIT } from "./Reducer/editReducer";
import { ACTION_TYPES } from "../../../actionType";
import AlertMessage from "../../../Alert";

export function BarangayEdit({ isOpen, isClose, onSaved }) {
    const [stateEdit, dispatchEdit] = useReducer(
        barangayEditReducer,
        INITIAL_STATE_EDIT
    );

    const handleInputChange = (e) => {
        dispatchEdit({
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
                ALertData={stateEdit.alertData}
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
                            Create Barangay{JSON.stringify(stateEdit.error)}
                        </Typography>

                        <Input
                            value={stateEdit.form.barangay}
                            error={stateEdit.error.barangay ? true : false}
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
                            loading={stateEdit.saving}
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
