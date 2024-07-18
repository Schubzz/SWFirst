const Description = () => {
    return (
        <section>
            <div
                className="flex flex-wrap p-10 bg-black overflow-x-hidden justify-center items-center gap-20 md:gap-60 min-h-screen w-screen">

                <div>
                    <h2 className="mb-6 text-left text-3xl md:text-5xl"><span
                        className="text-white">Was sind</span><br/> Service Worker ?</h2>
                    <p className="text-[1rem] md:text-xl max-w-lg">Service Worker sind eine Schlüsseltechnologie für moderne
                        Webanwendungen. Sie
                        fungieren als ein zwischen Browser und Netzwerk agierender Proxy, der die Kontrolle über
                        Netzwerk-Anfragen und das Caching von Ressourcen ermöglicht. Dies führt zu erheblichen
                        Leistungsverbesserungen und ermöglicht Offline-Fähigkeiten. Einmal registriert, kann ein Service
                        Worker
                        Push-Benachrichtigungen senden, Hintergrund-Synchronisierungen durchführen und die App-Erfahrung
                        verbessern, selbst wenn keine Internetverbindung besteht. </p>
                </div>

                <img src="NoWifiNoProblem.png" alt="No Wifi No Problem"
                     className="max-h-[50vh] md:max-h-[80vh] drop-shadow-accent "/>
            </div>

            <div className="flex flex-wrap-reverse p-10 bg-black overflow-x-hidden justify-center items-center gap-20 md:gap-60 min-h-screen w-screen">

                <img src="Architecture.png" alt="No Wifi No Problem"
                     className="max-h-[30vh] md:max-h-[40vh] drop-shadow-accent "/>
                <div>
                    <h1 className="mb-6 text-left text-3xl md:text-5xl">
                        <span className="text-white">Einsatzbereiche von </span><br/>Service Workern
                    </h1>
                    <p className="text-[1rem] md:text-xl max-w-lg">
                        Service Worker sind essenziell für die Entwicklung von Progressive Web Apps (PWAs). Sie
                        ermöglichen Offline-Zugriff,
                        indem sie Netzwerk-Anfragen abfangen und Ressourcen zwischenspeichern. Dies führt zu schnelleren
                        Ladezeiten und
                        einer verbesserten Benutzererfahrung, selbst bei langsamer oder fehlender Internetverbindung.
                        PWAs können Push-Benachrichtigungen
                        senden und Hintergrund-Synchronisierungen durchführen, wodurch sie in vielerlei Hinsicht wie
                        native Apps funktionieren.
                        Durch die Verwendung von Service Workern werden PWAs robust, zuverlässig und flexibel
                        einsetzbar.
                    </p>
                </div>


            </div>


        </section>


    )
}

export default Description