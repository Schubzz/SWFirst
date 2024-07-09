const OverviewAccordion = () => {
    return (
        <div className='my-6'>
            <details>
                <summary className='text-accent'>Überblick über Caching</summary>
                <div className="p-6 bg-slate-900">
                    <h4 className="text-white font-bold mb-2">Bedeutung des Caching:</h4>
                    <p className="text-gray-300 mb-4">
                        Caching spielt eine zentrale Rolle bei der Verbesserung der Performance von Webanwendungen. Es ermöglicht, häufig genutzte Dateien lokal zu speichern, was die Ladezeiten verkürzt und die Benutzererfahrung verbessert.
                    </p>
                    <h4 className="text-white font-bold mb-2">Vorteile für Performance und Offline-Fähigkeiten:</h4>
                    <ul className="text-gray-300 list-disc list-inside">
                        <li>Performance: Durch das Speichern von Dateien im Cache können Anwendungen schneller geladen werden, da weniger Dateien über das Netzwerk angefordert werden müssen.</li>
                        <li>Offline-Fähigkeiten: Anwendungen können auch ohne Internetverbindung funktionieren, da gecachte Dateien weiterhin verfügbar sind.</li>
                    </ul>
                </div>
            </details>
        </div>
    );
}

export default OverviewAccordion;
