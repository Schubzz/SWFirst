const PWAIntro = () => {

    return (
        <section className="bg-black">
        
            <div
                className="flex flex-wrap p-10 overflow-x-hidden justify-center items-center md:gap-60 min-h-screen w-screen">

                <div>
                    <h2 className="my-12 text-left text-3xl md:text-5xl">
                        <span className="text-white">Schritt für Schritt zur</span><br/> PWA mit VitePWA
                    </h2>
                    <p className="text-[1rem] md:text-xl max-w-lg">
                        Diese Anwendung ist eine mit VitePWA erstellte Progressive Web App (PWA). In dieser Anleitung zeige ich dir Schritt für Schritt, wie du eine PWA mit Vite und dem VitePWA-Plugin erstellst. Du wirst lernen, wie du Vite einrichtest, das VitePWA-Plugin konfigurierst und die Vorteile von PWAs, wie Offline-Fähigkeiten und schnelle Ladezeiten, in deiner Webanwendung implementierst.
                    </p>
                    <p className="text-accent text-xs my-2">Lesezeit ca. 10 Minuten</p>
                </div>

                <img src="VitePWA.svg" alt="VitePWA Logo"
                     className="max-h-[30vh] drop-shadow-accent "/>
            </div>

            <div className="w-full h-1 bg-[#1FFFC9]"></div>
        </section>
    )
}

export default PWAIntro