import { useState } from 'react';

const QuellenDownload = () => {
    const [dialogVisible, setDialogVisible] = useState(false);

    const toggleDialog = () => {
        setDialogVisible(!dialogVisible);
    };

    return (
        <>
            <button
                className="text-accent text-2xl fixed top-[2vh] right-10 z-30"
                onClick={toggleDialog}
                aria-label="Download Quellen"
            >
                Q
            </button>

            {dialogVisible && (
                <div className="fixed top-[10vh] right- w-full flex items-center justify-center z-30">
                    <div className="bg-black text-slate-300 custom-shadow p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-3xl font-bold mb-4 text-center">Wertvolle Quellen für das Projekt</h2>
                        <p className="font-normal mb-4">
                            Um dir den Einstieg in das Thema Service Worker zu erleichtern, habe ich ein PDF-Dokument erstellt,
                            das die wichtigsten und hilfreichsten Quellen für mein Projekt vorstellt. Du kannst das Dokument
                            über den folgenden Link herunterladen:
                        </p>
                        <a
                            href="/Quellen.pdf"
                            download
                            onClick={toggleDialog}
                            className="bg-accent text-black font-bold px-4 py-2 rounded hover:bg-accent-dark block text-center"
                        >
                            Quellen herunterladen
                        </a>
                        <button
                            className="mt-4 text-accent text-center w-full"
                            onClick={toggleDialog}
                        >
                            Schließen
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default QuellenDownload;
