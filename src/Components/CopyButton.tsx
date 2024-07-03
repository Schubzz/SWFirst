import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface CopyButtonProps {
    textToCopy: string;
    buttonId: string;
    copiedButton: string | null;
    onCopy: (buttonId: string) => void;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy, buttonId, copiedButton, onCopy }) => {
    return (
        <CopyToClipboard text={textToCopy} onCopy={() => onCopy(buttonId)}>
            <button className="absolute top-2 right-2 bg-accent text-custom-dark font-medium px-2 py-1 rounded z-10 flex items-center justify-center">
                {copiedButton === buttonId ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 "
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                ) : (
                        'kopieren'
                )}
            </button>
        </CopyToClipboard>
    );
};

export default CopyButton;
