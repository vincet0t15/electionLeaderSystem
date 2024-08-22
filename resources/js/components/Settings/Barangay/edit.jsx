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
import { ACTION_TYPES } from "../../../actionType";
import AlertMessage from "../../../Alert";

export function BarangayEdit({ isOpen, isClose, onSaved, data }) {
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
        dispatchEdit({ type: ACTION_TYPES.SAVE_START });

        try {
            const response = await apiClient.post("barangay", stateEdit.form);

            dispatchEdit({
                type: ACTION_TYPES.SAVE_SUCCESS,
                payload: response.data,
            });

            onSaved();
            isClose();
        } catch (error) {
            dispatchEdit({
                type: ACTION_TYPES.FETCH_ERROR,
                payload: error.response.data.errors,
            });
        }
    };

    useEffect(() => {
        if (isOpen && data) {
            dispatchEdit({
                type: ACTION_TYPES.LOAD_DATA_TO_EDIT,
                payload: data,
            });
        }
    }, [isOpen, data]);

    return (
        <>
            {/* <AlertMessage
                alertData={stateEdit.alertData} // Corrected prop name
                isClose={() => dispatchEdit({ type: ACTION_TYPES.CLEAR_ALERT })}
            /> */}

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
                            EDIT Barangay{JSON.stringify(stateEdit.form)}
                        </Typography>

                        <Input
                            value={stateEdit.form.barangay}
                            error={!!stateEdit.error.barangay} // Simplified boolean check
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
                            Save
                        </Button>
                    </CardFooter>
                </Card>
            </Dialog>
        </>
    );
}
