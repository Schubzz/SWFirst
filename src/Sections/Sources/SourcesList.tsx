import { FaExternalLinkAlt } from "react-icons/fa";

const SourcesList = () => {

    return (

        <section className="custom-shadow bg-black bg-opacity-85 p-10 flex flex-col gap-10 overflow-x-hidden items-center justify-center min-h-screen w-screen text-white">
            <div className="max-w-4xl w-full">

                {/* Quelle 1 */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Quelle 1: MDN Web Docs - Service Worker API</h3>
                    <p className="mb-8 flex gap-2 items-center">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API" className="text-accent" target="_blank" rel="noopener noreferrer">Q1</a>
                        <FaExternalLinkAlt className="text-lg text-accent" />
                    </p>
                    <p className="mb-8">
                        Die MDN Web Docs sind eine sehr gute Quelle, in der alle wichtigen Informationen über Service Worker bereitgestellt werden. Hier findest du alles von den Grundlagen bis hin zu fortgeschrittenen Themen. Die Seite erklärt dir Schritt für Schritt, wie du einen Service Worker registrierst, welche Lebenszyklus-Phasen es gibt und welche Events wichtig sind. Dazu gibt es jede Menge praktische Beispiele und Code-Snippets, die dir beim Einstieg helfen.
                    </p>
                    <h4 className="text-2xl font-semibold my-4">Inhalte:</h4>
                    <h5 className="text-xl font-semibold my-2">Einführung in die Service Worker API:</h5>
                    <p className="mb-4">
                        Die MDN Web Docs beginnen mit einer grundlegenden Einführung in die Service Worker API. Hier werden die Konzepte und die Rolle von Service Workern im Web-Ökosystem erläutert.
                    </p>
                    <h5 className="text-xl font-semibold my-2">Registrierung und Lebenszyklus von Service Workern:</h5>
                    <p className="mb-4">
                        Ein detaillierter Abschnitt erklärt, wie Service Worker registriert werden und durch welche Phasen (install, activate, idle) sie während ihres Lebenszyklus gehen.
                    </p>
                    <h5 className="text-xl font-semibold my-2">Wichtige Ereignisse:</h5>
                    <p className="mb-4">
                        Die Dokumentation beschreibt die wichtigsten Ereignisse wie install, activate und fetch im Detail. Jedes dieser Ereignisse wird mit Beispielen und Anwendungsfällen erläutert.
                    </p>
                    <h5 className="text-xl font-semibold my-2">API-Referenz:</h5>
                    <p className="mb-4">
                        Eine vollständige Referenz der Service Worker API, einschließlich aller Methoden, Eigenschaften und Ereignisse. Diese Referenz ist besonders nützlich für die schnelle Suche nach spezifischen Informationen.
                    </p>
                    <h5 className="text-xl font-semibold my-2">Beispiele und Best Practices:</h5>
                    <p className="mb-4">
                        Zahlreiche Codebeispiele und Best Practices helfen die Service Worker richtig zu implementieren. Diese Beispiele decken verschiedene Szenarien ab, von einfachen Caching-Strategien bis hin zu komplexen Anwendungen.
                    </p>
                    <h5 className="text-xl font-semibold my-2">Browser-Kompatibilität:</h5>
                    <p className="mb-4">
                        Ein Abschnitt zur Browser-Kompatibilität informiert darüber, welche Funktionen in welchen Browsern unterstützt werden, was bei der Entwicklung plattformübergreifender Anwendungen entscheidend ist.
                    </p>
                    <h4 className="text-2xl font-semibold my-4">Nutzen für das Projekt:</h4>
                    <p>
                        Die MDN Web Docs sind eine sehr gute und umfassende Quelle für das Verständnis und die Implementierung von Service Workern. Durch die klaren Erklärungen und praxisnahen Beispiele konnte ich die Grundlagen dort schnell erfassen und die Funktionsweise verstehen.
                    </p>
                </div>

                {/* Quelle 2 */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Quelle 2: Vite PWA Plugin Guide</h3>
                    <p className="mb-8 flex gap-2 items-center">
                        <a href="https://vite-pwa-org.netlify.app/guide/" className="text-accent" target="_blank" rel="noopener noreferrer">Q2</a>
                        <FaExternalLinkAlt className="text-lg text-accent" />
                    </p>
                    <p className="mb-8">
                        Der Vite PWA Plugin Guide richtet sich an Entwickler, die Progressive Web Apps mit Vite erstellen möchten. In diesem Guide findest du Schritt-für-Schritt-Anleitungen zur Installation und Konfiguration des Plugins. Der Guide erklärt detailliert, wie du das Plugin in deinem Projekt integrierst und es an deine speziellen Bedürfnisse anpasst. Besondere Schwerpunkte liegen auf der Anpassung des Service Workers und des Manifests, damit deine PWA optimal funktioniert. Die klare Struktur und die praxisnahen Beispiele machen den Guide zu einer wertvollen Hilfe im Entwicklungsprozess.
                    </p>
                    <h4 className="text-2xl font-semibold my-4">Inhalte:</h4>
                    <h5 className="text-xl font-semibold my-2">Installation und Konfiguration:</h5>
                    <p className="mb-4">
                        Schritt-für-Schritt-Anleitungen zur Installation des Plugins und zur Grundkonfiguration. Diese Anleitungen sind klar und verständlich und erleichtern den Einstieg in das Thema sehr.
                    </p>
                    <h5 className="text-xl font-semibold my-2">Service Worker Strategien:</h5>
                    <p className="mb-4">
                        Eine Übersicht der unterstützten Strategien, wie generateSW und injectManifest, mit Erklärungen zu den jeweiligen Vor- und Nachteilen. Dies hilft, die richtige Strategie für Projekte auszuwählen.
                    </p>
                    <h5 className="text-xl font-semibold my-2">Manifest-Anpassung:</h5>
                    <p className="mb-4">
                        Anleitungen zur Erstellung und Anpassung des Web App Manifests, um die PWA nach den eigenen Bedürfnissen zu gestalten. Hier werden auch Best Practices und häufige Fehler beschrieben.
                    </p>
                    <h5 className="text-xl font-semibold my-2">Beispiele und Tipps:</h5>
                    <p className="mb-4">
                        Zahlreiche Codebeispiele und praktische Tipps zur Nutzung des Plugins in verschiedenen Szenarien. Diese Beispiele helfen, die Theorie in die Praxis umzusetzen und typische Anwendungsfälle abzudecken.
                    </p>
                    <h5 className="text-xl font-semibold my-2">Troubleshooting:</h5>
                    <p className="mb-4">
                        Ein Abschnitt zum Beheben häufiger Probleme und Fehler. Diese Tipps sind nützlich, um Entwicklungsblockaden zu vermeiden und schnell Lösungen zu finden.
                    </p>
                    <h4 className="text-2xl font-semibold my-4">Nutzen für das Projekt:</h4>
                    <p>
                        Der Vite PWA Plugin Guide war eine wertvolle Quelle, um die PWA-Funktionalitäten schnell und effizient in mein Projekt zu integrieren. Die klaren Anleitungen und die Beispiele halfen dabei, typische Stolpersteine zu umgehen und die PWA-Funktionen optimal zu nutzen.
                    </p>
                </div>

                {/* Quelle 3 */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Quelle 3: YouTube - Full Introduction to Service Workers</h3>
                    <p className="mb-8 flex gap-2 items-center">
                        <a href="https://www.youtube.com/watch?v=NJRu3pmmN-4" className="text-accent" target="_blank" rel="noopener noreferrer">Q3</a>
                        <FaExternalLinkAlt className="text-lg text-accent" />
                    </p>
                    <p className="mb-8">
                        Dieses YouTube-Tutorial gibt dir eine tolle Einführung in die Welt der Service Worker. Es zeigt dir, wie du einen Service Worker registrierst, Updates überwachst und die Entwicklungswerkzeuge nutzt. Das Video ist besonders hilfreich, weil es viele praktische Beispiele und anschauliche Demonstrationen bietet. Ideal, wenn du visuell lernst und direkt sehen willst, wie Service Worker funktionieren.
                    </p>
                    <h4 className="text-2xl font-semibold my-4">Inhalte:</h4>
                    <h5 className="text-xl font-semibold my-2">Registrierung und Überwachung von Service Workern:</h5>
                    <p className="mb-4">
                        Schritt-für-Schritt-Anleitungen zur Registrierung von Service Workern und zur Überwachung ihrer Updates. Diese Anleitungen sind praktisch und gut nachvollziehbar.
                    </p>
                    <h5 className="text-xl font-semibold my-2">Nutzung der Entwicklertools:</h5>
                    <p className="mb-4">
                        Detaillierte Erklärungen zur Nutzung der Entwicklertools in Chrome, Firefox und Safari, um Service Worker zu debuggen und zu überwachen. Diese Tools sind sehr hilfreich für die Entwicklung und Fehlersuche.
                    </p>
                    <h5 className="text-xl font-semibold my-2">Lebenszyklus von Service Workern:</h5>
                    <p className="mb-4">
                        Eine klare Darstellung des Lebenszyklus von Service Workern, einschließlich der verschiedenen Phasen und Ereignisse. Dies hilft, das Verhalten der Service Worker besser zu verstehen und zu steuern.
                    </p>
                    <h5 className="text-xl font-semibold my-2">Extendable Events:</h5>
                    <p className="mb-4">
                        Erklärungen zu den extendable events und deren Zweck innerhalb des Service Worker Lebenszyklus. Diese Ereignisse sind wichtig, um benutzerdefinierte Funktionen zu implementieren.
                    </p>
                    <h5 className="text-xl font-semibold my-2">Praxisnahes Beispiel:</h5>
                    <p className="mb-4">
                        Da es sich um ein Tutorial handelt, eignet es sich perfekt dafür es während des Schauens selbst nachzubauen. Alleine durch das Tippen des Codes und benutzen der Dev-Tools bekommt man ein gutes Verständnis für die konkrete Implementierung.
                    </p>
                    <h4 className="text-2xl font-semibold my-4">Nutzen für das Projekt:</h4>
                    <p>
                        Das Tutorial war eine wirklich gute visuelle Ergänzung zu den schriftlichen Ressourcen. Es half mir, die Konzepte schneller zu verstehen und direkt in die Praxis umzusetzen. Besonders die Demonstrationen der Entwicklertools waren äußerst hilfreich für das Debuggen und Optimieren der Service Worker. Dort lernst du die wirklich praktische Anwendung.
                    </p>
                </div>

                {/* Quelle 4 */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Quelle 4: Chrome Developers - Caching Strategies Overview</h3>
                    <p className="mb-8 flex gap-2 items-center">
                        <a href="https://developer.chrome.com/docs/workbox/caching-strategies-overview?hl=de" className="text-accent" target="_blank" rel="noopener noreferrer">Q4</a>
                        <FaExternalLinkAlt className="text-lg text-accent" />
                    </p>
                    <p className="mb-8">
                        Die Entwicklerdokumentation von Chrome über Caching-Strategien mit Workbox erklärt dir, wie du Caching in Webanwendungen effizient einsetzt. Du erfährst, wie verschiedene Strategien funktionieren und welche Vor- und Nachteile sie haben. Diese Quelle ist super, um zu verstehen, wie du die Leistung und Zuverlässigkeit deiner Webanwendungen verbessern kannst.
                    </p>
                    <h4 className="text-2xl font-semibold my-4">Inhalte:</h4>
                    <h5 className="text-xl font-semibold my-2">Überblick über Caching-Strategien:</h5>
                    <p className="mb-4">
                        Eine Einführung in die verschiedenen Caching-Strategien wie Cache First, Network First und Stale-While-Revalidate. Jede Strategie wird detailliert erklärt und ihre Vor- und Nachteile werden aufgezeigt.
                    </p>
                    <h5 className="text-xl font-semibold my-2">Implementierung mit Workbox:</h5>
                    <p className="mb-4">
                        Schritt-für-Schritt-Anleitungen zur Implementierung der Caching-Strategien mit Workbox. Diese Anleitungen sind klar strukturiert und leicht verständlich.
                    </p>
                    <h5 className="text-xl font-semibold my-2">Beispiele und Anwendungsfälle:</h5>
                    <p className="mb-4">
                        Praxisnahe Beispiele, die zeigen, wie die verschiedenen Caching-Strategien in realen Anwendungen eingesetzt werden können. Diese Beispiele helfen, die Theorie in die Praxis umzusetzen.
                    </p>
                    <h5 className="text-xl font-semibold my-2">Best Practices:</h5>
                    <p className="mb-4">
                        Empfehlungen und Best Practices zur Optimierung der Performance und Zuverlässigkeit von PWAs. Diese Tipps sind sehr nützlich für die Entwicklung effizienter und benutzerfreundlicher Anwendungen.
                    </p>
                    <h5 className="text-xl font-semibold my-2">Fehlersuche und Debugging:</h5>
                    <p className="mb-4">
                        Hinweise zur Fehlersuche und zum Debugging von Caching-Problemen. Diese Tipps helfen, typische Fehler zu vermeiden und schnell Lösungen zu finden.
                    </p>
                    <h4 className="text-2xl font-semibold my-4">Nutzen für das Projekt:</h4>
                    <p>
                        Die Chrome Developers Dokumentation ist eine wichtige Quelle, um die verschiedenen Caching-Strategien zu verstehen und in Projekte zu integrieren.
                    </p>
                </div>

                {/* Quelle 5 */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Quelle 5: Chrome Developers - What is Workbox?</h3>
                    <p className="mb-8 flex gap-2 items-center">
                        <a href="https://developer.chrome.com/docs/workbox/what-is-workbox?hl=de" className="text-accent" target="_blank" rel="noopener noreferrer">Q5</a>
                        <FaExternalLinkAlt className="text-lg text-accent" />
                    </p>
                    <p className="mb-8">
                        Die Einführung in Workbox von der Chrome-Dokumentation gibt dir einen guten Überblick darüber, was Workbox ist und wie es dir helfen kann. Workbox macht es einfacher, Service Worker und Caching-Strategien zu implementieren. Diese Dokumentation zeigt dir, wie du Workbox in dein Projekt einbindest, um deine Webanwendungen robuster und benutzerfreundlicher zu machen.
                    </p>
                    <h4 className="text-2xl font-semibold my-4">Inhalte:</h4>
                    <h5 className="text-xl font-semibold my-2">Einführung in Workbox:</h5>
                    <p className="mb-4">
                        Eine grundlegende Erklärung, was Workbox ist und welche Vorteile es bietet. Diese Einführung hilft zu verstehen, warum Workbox eine wertvolle Ergänzung zu Entwicklungswerkzeugen ist.
                    </p>
                    <h5 className="text-xl font-semibold my-2">Übersicht der Tools und Bibliotheken:</h5>
                    <p className="mb-4">
                        Eine Übersicht der verschiedenen Tools und Bibliotheken, die Workbox bietet. Diese Tools sind darauf ausgelegt, die Implementierung von Service Workern und Caching-Strategien zu vereinfachen.
                    </p>
                    <h5 className="text-xl font-semibold my-2">Implementierungsbeispiele:</h5>
                    <p className="mb-4">
                        Praxisnahe Beispiele, die zeigen, wie Workbox in verschiedenen Szenarien eingesetzt werden kann. Diese Beispiele helfen, die Theorie in die Praxis umzusetzen und typische Anwendungsfälle abzudecken.
                    </p>
                    <h5 className="text-xl font-semibold my-2">Vorteile von Workbox:</h5>
                    <p className="mb-4">
                        Dazu gehören die Vereinfachung der Implementierung, die Einhaltung von Best Practices und die Verbesserung der Performance und Zuverlässigkeit von Anwendungen.
                    </p>
                    <h5 className="text-xl font-semibold my-2">Dokumentation und Ressourcen:</h5>
                    <p className="mb-4">
                        Verweise auf weiterführende Dokumentationen und Ressourcen, die helfen, sich weiter in Workbox einzuarbeiten und das volle Potenzial der Tools auszuschöpfen.
                    </p>
                    <h4 className="text-2xl font-semibold my-4">Nutzen für das Projekt:</h4>
                    <p>
                        Im Projekt selbst wurde garnicht konkret mit Workbox gearbeitet. Allerdings ist es ein wichtiger teil bei der Entwicklung von Anwendungen, bei denen Caching-Strategien implementiert und angepasst werden müssen. Daher ist diese Quelle eine sehr gute Ergänzung.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SourcesList;