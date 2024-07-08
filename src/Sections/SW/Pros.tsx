const Pros = () => {
    return (
        <section>
            <div className="flex flex-col p-10 bg-black bg-opacity-50 overflow-x-hidden justify-center min-h-screen w-screen">
            <h2 className="mb-6 text-center text-3xl md:text-5xl">
                <span className="text-white">Was sind die</span><br/> Pro's ?
                </h2>

                <div className="pros-container group hover:bg-accent rounded-lg p-4 mb-4 transition-all duration-300">
                    <h3 className="opacity-30 group-hover:opacity-100 group-hover:text-black">Offline-Fähigkeit</h3>
                    <p className="hidden group-hover:flex text-black transition-all duration-300">Service Worker ermöglichen es Webanwendungen, auch offline oder bei instabiler Internetverbindung zu funktionieren, indem sie Ressourcen aus dem Cache bereitstellen​​.</p>
                    <a className="mt-6 hidden group-hover:flex font-bold transition-all duration-300 text-gray-800 hover:text-black hover:font-normal" href="https://asaqeni.com/learn/js/pwa-offline-capabilities" target="_blank">Q - Asaqeni Learning</a>
                </div>

                <div className="pros-container group hover:bg-accent rounded-lg p-4 mb-4 transition-all duration-300">
                    <h3 className="opacity-30 group-hover:opacity-100 group-hover:text-black">Performance Optimierung</h3>
                    <p className="hidden group-hover:flex text-black transition-all duration-300">Durch das Caching häufig genutzter Dateien können Ladezeiten verkürzt und die Nutzererfahrung verbessert werden. Service Worker ermöglichen es, Inhalte schnell und zuverlässig bereitzustellen, auch bei langsamen oder instabilen Netzwerkverbindungen.</p>
                    <a className="mt-6 hidden group-hover:flex font-bold transition-all duration-300 text-gray-800 hover:text-black hover:font-normal" href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers" target="_blank">Q - MDN Web Docs</a>
                </div>

                <div className="pros-container group hover:bg-accent rounded-lg p-4 mb-4 transition-all duration-300">
                    <h3 className="opacity-30 group-hover:opacity-100 group-hover:text-black">Hintergrund-Synchronisation</h3>
                    <p className="hidden group-hover:flex text-black transition-all duration-300">Service Worker können Daten im Hintergrund synchronisieren, wenn die Anwendung wieder online ist. Dies ist besonders nützlich für Anwendungen mit Echtzeit-Daten, da es ermöglicht, dass Benutzer auch bei unterbrochener Verbindung weiterhin arbeiten können, ohne Daten zu verlieren.</p>
                    <a className="mt-6 hidden group-hover:flex font-bold transition-all duration-300 text-gray-800 hover:text-black hover:font-normal" href="https://web.dev/learn/pwa/service-workers/" target="_blank">Q - Web.dev</a>
                </div>

                <div className="pros-container group hover:bg-accent rounded-lg p-4 mb-4 transition-all duration-300">
                    <h3 className="opacity-30 group-hover:opacity-100 group-hover:text-black">Push Benachrichtigungen</h3>
                    <p className="hidden group-hover:flex text-black transition-all duration-300">Service Worker können Push-Benachrichtigungen empfangen und anzeigen, auch wenn die Webanwendung geschlossen ist. Dies verbessert die Nutzerbindung und ermöglicht es, Benutzer über wichtige Ereignisse oder Updates zu informieren.</p>
                    <a className="mt-6 hidden group-hover:flex font-bold transition-all duration-300 text-gray-800 hover:text-black hover:font-normal" href="https://developers.google.com/web/ilt/pwa/introduction-to-push-notifications" target="_blank">Q - Google Developers</a>
                </div>
            </div>
        </section>
    )
}

export default Pros
