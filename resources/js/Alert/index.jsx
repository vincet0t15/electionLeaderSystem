import React, { useEffect, useState } from "react";
import { Alert } from "@material-tailwind/react";

export default function AlertMessage({ alertData, isClose }) {
    useEffect(() => {
        if (alertData.isShow) {
            const timer = setTimeout(() => {
                isClose();
            }, 5000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [alertData, isClose]);

    return (
        <div>
            <Alert
                color={alertData.status === "success" ? "teal" : "red"}
                className="fixed top-12 right-2 z-50 mt-16 w-1/4 m-2"
                open={alertData.isShow}
                onClose={isClose} // Make sure isClose is a function
                animate={{
                    mount: { y: 0 },
                    unmount: { y: 100 },
                }}
            >
                {alertData.message}
            </Alert>
        </div>
    );
}
