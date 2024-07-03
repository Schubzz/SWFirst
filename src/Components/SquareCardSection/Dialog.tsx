import React from "react";

interface DialogProps {
    x: number;
    y: number;
    content: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ x, y, content }) => {
    const dialogRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const dialog = dialogRef.current;
        if (dialog) {
            const { innerWidth, innerHeight } = window;
            const { offsetWidth, offsetHeight } = dialog;
            if (x + offsetWidth > innerWidth) {
                dialog.style.left = `${x - offsetWidth}px`;
            } else {
                dialog.style.left = `${x}px`;
            }
            if (y + offsetHeight > innerHeight) {
                dialog.style.top = `${y - offsetHeight}px`;
            } else {
                dialog.style.top = `${y}px`;
            }
        }
    }, [x, y]);

    return (
        <div
            ref={dialogRef}
            className="dialog fixed backdrop-blur rounded-md max-w-[30rem] p-4 border-b border-t border-[#1FFFC9] shadow-lg"
        >
            <div>{content}</div>
        </div>
    );
};

export default Dialog;
