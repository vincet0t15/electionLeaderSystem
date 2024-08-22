import { Alert } from "@material-tailwind/react";
import React, { useEffect } from "react";

export default function AlertMessage({ ALertData, isCLose }) {
    const [open, setOpen] = React.useState(true);
    useEffect(() => {
        if (ALertData.isShow) {
            const timer = setTimeout(() => {
                setOpen(false);
                isCLose();
            }, 5000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [ALertData]);

    return (
        <div>
            <Alert
                color={ALertData.status === "success" ? "teal" : "red"}
                className="fixed top-12 right-2 z-50 mt-16 w-1/4 m-2"
                open={ALertData.isShow}
                onClose={isCLose}
                animate={{
                    mount: { y: 0 },
                    unmount: { y: 100 },
                }}
            >
                {ALertData.message}
            </Alert>
        </div>
    );
}
