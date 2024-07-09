import ProCards from "./ProCards"


const Pros = () => {
    return (
        <section>
            <div className="flex flex-col p-10 bg-black bg-opacity-50 overflow-x-hidden justify-center min-h-screen w-screen">
                <h2 className="mb-6 text-center text-3xl md:text-5xl">
                    <span className="text-white">Was sind die</span><br /> Pro's ?
                </h2>

                <ProCards
                    title="Offline-Fähigkeit"
                    description="Service Worker ermöglichen es Webanwendungen, auch offline oder bei instabiler Internetverbindung zu funktionieren, indem sie Ressourcen aus dem Cache bereitstellen​​."
                    link="https://asaqeni.com/learn/js/pwa-offline-capabilities"
                    linkText="Q - Asaqeni Learning"
                />

                <ProCards
                    title="Performance Optimierung"
                    description="Durch das Caching häufig genutzter Dateien können Ladezeiten verkürzt und die Nutzererfahrung verbessert werden. Service Worker ermöglichen es, Inhalte schnell und zuverlässig bereitzustellen, auch bei langsamen oder instabilen Netzwerkverbindungen."
                    link="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers"
                    linkText="Q - MDN Web Docs"
                />

                <ProCards
                    title="Hintergrund-Synchronisation"
                    description="Service Worker können Daten im Hintergrund synchronisieren, wenn die Anwendung wieder online ist. Dies ist besonders nützlich für Anwendungen mit Echtzeit-Daten, da es ermöglicht, dass Benutzer auch bei unterbrochener Verbindung weiterhin arbeiten können, ohne Daten zu verlieren."
                    link="https://web.dev/learn/pwa/service-workers/"
                    linkText="Q - Web.dev"
                />

                <ProCards
                    title="Push Benachrichtigungen"
                    description="Service Worker können Push-Benachrichtigungen empfangen und anzeigen, auch wenn die Webanwendung geschlossen ist. Dies verbessert die Nutzerbindung und ermöglicht es, Benutzer über wichtige Ereignisse oder Updates zu informieren."
                    link="https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications"
                    linkText="Q - Google Developers"
                />
            </div>
        </section>
    )
}

export default Pros
