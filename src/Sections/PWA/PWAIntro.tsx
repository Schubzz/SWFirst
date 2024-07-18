const PWAIntro = () => {

    return (
        <section
            className="flex flex-col p-10  lg:pt-0 bg-black bg-opacity-50 overflow-x-hidden items-center justify-center min-h-screen w-screen">
            
            <div
                className="flex flex-wrap p-10 bg-black bg-opacity-50 overflow-x-hidden justify-center items-center md:gap-60 min-h-screen w-screen">

                <div>
                    <h2 className="mb-6 text-left text-3xl md:text-5xl">
                        <span className="text-white">Schritt für Schritt zur</span><br/> PWA mit VitePWA
                    </h2>
                    <p className="text-[1rem] md:text-xl max-w-lg">
                        Diese Anwendung ist eine mit VitePWA erstellte Progressive Web App (PWA). In dieser Anleitung zeige ich dir Schritt für Schritt, wie du eine PWA mit Vite und dem VitePWA-Plugin erstellst. Du wirst lernen, wie du Vite einrichtest, das VitePWA-Plugin konfigurierst und die Vorteile von PWAs, wie Offline-Fähigkeiten und schnelle Ladezeiten, in deiner Webanwendung implementierst.
                    </p>
                    <p className="text-[.75rem] md:text-s max-w-lg text-accent">
                        <a href="https://vite-pwa-org.netlify.app/guide/" target="blank">Vite PWA Dokumentation</a>
                    </p>
                </div>

                <img src="VitePWA.svg" alt="VitePWA Logo"
                     className="max-h-[30vh] drop-shadow-accent "/>
            </div>

        </section>
    )
}

export default PWAIntro