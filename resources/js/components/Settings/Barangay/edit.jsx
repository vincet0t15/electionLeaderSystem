import React, { useEffect, useReducer } from "react";
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
import { EDIT_BARANGAY_ACTION_TYPES } from "./editBarangayActionType";
import AlertMessage from "../../../Alert";

export function BarangayEdit({ isOpen, isClose, onSaved, dataToEdit }) {
    const [stateEdit, dispatchEdit] = useReducer(
        barangayEditReducer,
        INITIAL_STATE_EDIT
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatchEdit({
            type: "SET_FIELD",
            payload: { name, value },
        });
    };

    const updateBarangay = async () => {
        dispatchEdit({ type: EDIT_BARANGAY_ACTION_TYPES.SAVE_START });

        try {
            const response = await apiClient.patch(
                "barangay/" + stateEdit.form.id,
                stateEdit.form
            );

            dispatchEdit({
                type: EDIT_BARANGAY_ACTION_TYPES.SAVE_SUCCESS,
                payload: response.data,
            });

            onSaved();
            isClose();
        } catch (error) {
            dispatchEdit({
                type: EDIT_BARANGAY_ACTION_TYPES.SAVE_ERROR,
                payload: error.response.data.errors,
            });
        }
    };

    useEffect(() => {
        if (isOpen && dataToEdit) {
            dispatchEdit({
                type: EDIT_BARANGAY_ACTION_TYPES.LOAD_DATA_TO_EDIT,
                payload: dataToEdit,
            });
        }
    }, [isOpen, dataToEdit]);

    return (
        <>
            <AlertMessage
                alertData={stateEdit.alertData}
                isClose={() =>
                    dispatchEdit({
                        type: EDIT_BARANGAY_ACTION_TYPES.CLEAR_ALERT,
                    })
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
                        <div className="">
                            <Typography
                                color="blue-gray"
                                className="mb-4 uppercase text-gray-700 font-semibold tracking-widest"
                            >
                                EDIT Barangay
                            </Typography>
                            <Input
                                value={stateEdit.form.barangay}
                                error={!!stateEdit.error.barangay}
                                onChange={handleInputChange}
                                name="barangay"
                                label="Barangay"
                                color="teal"
                                size="md"
                                className="tracking-widest"
                            />
                            <span className="text-red-700 tracking-wide text-sm">
                                {stateEdit.error.barangay}
                            </span>
                        </div>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button
                            loading={stateEdit.saving}
                            color="teal"
                            onClick={updateBarangay}
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
