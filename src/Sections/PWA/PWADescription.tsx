const PWADescription = () => {
    return (
        <section>
            <div
                className="bg-black flex flex-col p-10 gap-10 overflow-x-hidden justify-center items-center min-h-screen w-screen">

                <div >
                    <p className="text-[1rem] md:text-xl max-w-lg">
                        Wie du vielleicht schon gesehen hast, befindet sich in der URL-Leiste das Symbol zum Installieren der Anwendung. Das bedeutet, dass es ein Webmanifest gibt.
                    </p>
                </div>

                <img src="InstallIcon.png" alt="Installieren Button in URL Leiste"
                    className="max-h-[50vh] drop-shadow-accent pb-4" />

                <div>
                    <p className="text-[1rem] md:text-xl max-w-lg">
                        Schaust du in die Dev-Tools deines Browsers, findest du unter "Application" auch einen registrierten und aktivierten Service Worker sowie den Ordner "Manifest". Dort befinden sich die notwendigen Assets. Dazu später mehr.
                    </p>
                </div>

                <img src="DevTools.png" alt="Dev-Tools - Application - registrierter und aktivierter Service Worker"
                    className="max-h-[50vh] drop-shadow-accent pb-4" />

                <div>
                    <p className="text-[1rem] md:text-xl max-w-lg">
                        Um das zu erreichen, schauen wir uns jetzt alle Schritte an, die notwendig sind um deine Anwendung zu einer PWA zu machen.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default PWADescription;
