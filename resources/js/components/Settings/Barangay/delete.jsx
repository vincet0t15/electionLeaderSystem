import React, { useEffect, useReducer, useState } from "react";
import apiClient from "../../../apiClient";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography,
    Spinner,
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { DELETE_BARANGAY_ACTION_TYPES } from "./deleteBarangayActionType";
import {
    barangayDeleteReducer,
    INITIAL_STATE_DELETE,
} from "./Reducer/deleteReducer";
export default function BarangayDelete({
    isOpen,
    isClose,
    onDelete,
    dataToDelete,
}) {
    const [stateDelete, dispatchDelete] = useReducer(
        barangayDeleteReducer,
        INITIAL_STATE_DELETE
    );
    const handleDelete = () => {
        console.log(stateDelete.form);
    };

    useEffect(() => {
        dispatchDelete({
            type: DELETE_BARANGAY_ACTION_TYPES.DATA_TO_DELETE,
            payload: dataToDelete,
        });
    }, [dataToDelete]);
    return (
        <div>
            {/* MESSAGE ALERT */}
            {/* <AlertMessage
                ALertData={alertData}
                isCLose={() =>
                    setAlertData({ isShow: false, message: "", status: "" })
                }
            /> */}

            {/* DELETE DIALOG */}
            <Dialog open={isOpen} size="xs" handler={isClose}>
                <div className="p-4">
                    <Typography
                        color="blue-gray"
                        className="uppercase text-red-600 font-semibold tracking-wide "
                    >
                        Your Attention is Required!
                    </Typography>
                </div>
                <DialogBody divider className="grid place-items-center gap-4">
                    <TrashIcon className="h-16 w-16 text-red-500" />

                    <Typography
                        color="red"
                        variant="h4"
                        className="text-center tracking-wide"
                    >
                        Are you sure you want to delete{" "}
                        <span className="uppercase">
                            {stateDelete.form.barangay}
                        </span>
                    </Typography>

                    <Typography className="text-center font-normal tracking-wide">
                        This action cannot be undone!
                    </Typography>
                </DialogBody>
                <DialogFooter className="space-x-2">
                    <Button variant="text" color="blue-gray" onClick={isClose}>
                        Close
                    </Button>

                    <Button color="green" onClick={handleDelete}>
                        delete
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
}
