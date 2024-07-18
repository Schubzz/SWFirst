import { useState } from "react";
import CopyButton from "../../Components/CopyButton";

const Tutorial = () => {
    const [copiedButton, setCopiedButton] = useState<string | null>(null);

    const handleCopy = (buttonId: string) => {
        setCopiedButton(buttonId);
        setTimeout(() => setCopiedButton(null), 2000);
    };

    return (
        <section className="custom-shadow bg-black bg-opacity-85  p-10 flex flex-col gap-10 overflow-x-hidden items-center justify-center min-h-screen w-screen text-white">
            <div className="max-w-4xl w-full">
                <h2 className="text-5xl font-bold mb-8 text-center">VitePWA Tutorial</h2>

                {/* Schritt 1: Projekt initialisieren */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Projekt initialisieren</h3>

                    <p className="mb-6">
                        Zuerst initialisieren wir unser Projekt im Terminal. Wechsle in dein bevorzugtes Verzeichnis und starte den Initialisierungsbefehl:
                    </p>

                    <div className="code-container">
                        <CopyButton
                            textToCopy={`cd Dein_Verzeichnis
npm create @vite-pwa/pwa@latest`}
                            buttonId="init"
                            copiedButton={copiedButton}
                            onCopy={handleCopy}
                        />

                        <pre className="whitespace-pre-wrap break-words">{`
cd Dein_Verzeichnis
npm create @vite-pwa/pwa@latest
            `}</pre>
                    </div>

                    <p className="my-6">
                        Während des Prozesses wirst du aufgefordert, einige Eingaben zu machen. In meinem Fall habe ich die folgenden Eingaben verwendet:
                        <ul className="my-6 list-disc list-inside">
                            <li>Project name: SWFirst</li>
                            <li>Framework: React</li>
                            <li>Variant: TypeScript</li>
                            <li>PWA Name: SWFirst</li>
                            <li>PWA Short Name: SWFirst</li>
                            <li>PWA Description: Eine Beschreibung für SWFirst</li>
                            <li>Theme color: #ffffff</li>
                        </ul>
                        Du kannst die Theme-Farbe später noch ändern, also musst du dich hier nicht festlegen.
                    </p>
                </div>

                <div className="w-full h-1 bg-[#1FFFC9] my-6"></div>

                {/* Schritt 2: Strategie wählen */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Strategie wählen</h3>

                    <p className="mb-8">
                        Beim letzten Punkt <span className="text-accent">"strategy"</span> wirst du gefragt, welche Strategie du verwenden möchtest. Hier ein kurzer Überblick aus der Vite-Dokumentation:
                    </p>

                    <p className="mb-8">
                        <strong>generateSW:</strong> Vite-Plugin-PWA generiert den Service Worker für dich, du musst den Code für den Service Worker nicht selbst schreiben.
                    </p>

                    <p className="mb-8">
                        <strong>injectManifest:</strong> Vite-Plugin-PWA kompiliert deinen benutzerdefinierten Service Worker und injiziert dessen Precache-Manifest.
                    </p>

                    <p className="mb-8">
                        <a href="https://vite-pwa-org.netlify.app/guide/service-worker-strategies-and-behaviors#service-worker-strategies" target="_blank" rel="noopener noreferrer" className="text-accent underline">Mehr zur Strategie hier</a>
                    </p>

                    <p className="mb-8">
                        Ich entscheide mich hier für die erste Variante, also lasse ich einen Service Worker generieren, um es einfacher zu gestalten. Die vollständige Initialisierung sieht dann so aus:
                    </p>

                    <div className="code-container">
                        <CopyButton
                            textToCopy={`npm create @vite-pwa/pwa@latest
✔ Project name: … SWFirst
✔ Select a framework: › React
✔ Select a variant: › TypeScript
✔ PWA Name: … SWFirst
✔ PWA Short Name: … SWFirst
✔ PWA Description: … Eine Beschreibung für SWFirst
✔ Theme color: … #ffffff
✔ Select a strategy: › generateSW
✔ Select a behavior: › Prompt for update
✔ Enable periodic SW updates? … no 
✔ Show offline ready prompt? … yes
✔ Generate PWA Assets Icons on the fly? …  yes

Scaffolding project in /Users/Dein_Verzeichnis/SWFirst...

Done. Now run:

  cd SWFirst
  npm install
  npm run dev`}
                            buttonId="full-init"
                            copiedButton={copiedButton}
                            onCopy={handleCopy}
                        />

                        <pre className="whitespace-pre-wrap break-words">{`
npm create @vite-pwa/pwa@latest
✔ Project name: … SWFirst
✔ Select a framework: › React
✔ Select a variant: › TypeScript
✔ PWA Name: … SWFirst
✔ PWA Short Name: … SWFirst
✔ PWA Description: … Eine Beschreibung für SWFirst
✔ Theme color: … #ffffff
✔ Select a strategy: › generateSW
✔ Select a behavior: › Prompt for update
✔ Enable periodic SW updates? … no
✔ Show offline ready prompt? … yes
✔ Generate PWA Assets Icons on the fly? … yes

Scaffolding project in /Users/Dein_Verzeichnis/SWFirst...

Done. Now run:

  cd SWFirst
  npm install
  npm run dev
            `}</pre>
                    </div>
                </div>

                <div className="w-full h-1 bg-[#1FFFC9] my-6"></div>

                {/* Schritt 3: Abhängigkeiten installieren */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Abhängigkeiten installieren</h3>

                    <p className="mb-8">
                        Nachdem das Projekt erstellt wurde, wechsle in das Projektverzeichnis und installiere die Abhängigkeiten:
                    </p>

                    <div className="code-container">
                        <CopyButton
                            textToCopy={`cd SWFirst
npm install`}
                            buttonId="install"
                            copiedButton={copiedButton}
                            onCopy={handleCopy}
                        />

                        <pre className="whitespace-pre-wrap break-words">{`
cd SWFirst
npm install
            `}</pre>
                    </div>
                </div>

                <div className="w-full h-1 bg-[#1FFFC9] my-6"></div>

                {/* Schritt 4: Projekt in VSCode öffnen */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Projekt in VSCode öffnen</h3>

                    <p className="mb-8">
                        Öffne das Projekt in deienr IDE. Ich nutze hier VSCode. Für VSCode kannst du im Terminal den folgenden Befehl verwenden:
                    </p>

                    <div className="code-container">
                        <CopyButton
                            textToCopy={`code .`}
                            buttonId="vscode"
                            copiedButton={copiedButton}
                            onCopy={handleCopy}
                        />

                        <pre className="whitespace-pre-wrap break-words">{`
code .
            `}</pre>
                    </div>
                </div>

                <div className="w-full h-1 bg-[#1FFFC9] my-6"></div>

                {/* Schritt 5: VitePWA Plugin installieren */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">VitePWA Plugin installieren</h3>

                    <p className="mb-8">
                        Öffne ein neues Terminal in VSCode und installiere das VitePWA Plugin als Entwicklungsabhängigkeit:
                    </p>

                    <div className="code-container">
                        <CopyButton
                            textToCopy={`npm install -D vite-plugin-pwa`}
                            buttonId="plugin-install"
                            copiedButton={copiedButton}
                            onCopy={handleCopy}
                        />

                        <pre className="whitespace-pre-wrap break-words">{`
npm install -D vite-plugin-pwa
            `}</pre>
                    </div>
                </div>

                <div className="w-full h-1 bg-[#1FFFC9] my-6"></div>

                {/* Schritt 6: Vite Konfiguration anpassen */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Vite Konfiguration anpassen</h3>

                    <p className="mb-8">
                        Öffne die <code className="text-accent">vite.config.ts</code> Datei. Die durch das Plugin erstellte Konfigurationsdatei sieht so aus:
                    </p>

                    <div className="code-container">
                        <CopyButton
                            textToCopy={`import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'prompt',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'SWFirst',
      short_name: 'SWFirst',
      description: 'Eine Beschreibung für SWFirst',
      theme_color: '#ffffff',
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})`}
                            buttonId="vite-config"
                            copiedButton={copiedButton}
                            onCopy={handleCopy}
                        />
                        <pre className="whitespace-pre-wrap break-words">{`
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'prompt',
    injectRegister: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'SWFirst',
      short_name: 'SWFirst',
      description: 'Eine Beschreibung für SWFirst',
      theme_color: '#ffffff',
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})`}</pre>
                    </div>

                    <p className="my-8">
                        Ändere <code>enabled: false</code> zu <code>true</code>, damit du den Service Worker auch während der Entwicklung testen kannst:
                    </p>

                    <div className="code-container">
                        <CopyButton
                            textToCopy={`devOptions: {
  enabled: true,
  navigateFallback: 'index.html',
  suppressWarnings: true,
  type: 'module',
}`}
                            buttonId="vite-config-dev"
                            copiedButton={copiedButton}
                            onCopy={handleCopy}
                        />
                        <pre className="whitespace-pre-wrap break-words">{`
devOptions: {
  enabled: true,
  navigateFallback: 'index.html',
  suppressWarnings: true,
  type: 'module',
}`}</pre>
                    </div>
                </div>

                <div className="w-full h-1 bg-[#1FFFC9] my-6"></div>

                {/* Schritt 7: Entwicklungsserver starten */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Entwicklungsserver starten</h3>

                    <p className="mb-8">
                        Starte den Entwicklungsserver:
                    </p>

                    <div className="code-container">
                        <CopyButton
                            textToCopy={`npm run dev`}
                            buttonId="dev-server"
                            copiedButton={copiedButton}
                            onCopy={handleCopy}
                        />
                        <pre className="whitespace-pre-wrap break-words">{`
npm run dev`}</pre>
                    </div>

                    <p className="my-8">
                        Die Anwendung startet und du kannst den Service Worker sowie das Manifest in den DevTools unter dem Reiter "Application" sehen.
                    </p>
                </div>

                <div className="w-full h-1 bg-[#1FFFC9] my-6"></div>

                {/* Schritt 8: Anwendung als PWA testen */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Anwendung als PWA testen</h3>

                    <p className="mb-8">
                        Die Anwendung ist jetzt bereits eine PWA, was bedeutet, dass sie offline funktioniert und installiert werden kann. Um dies zu testen, kannst du die Anwendung im Browser öffnen und das Installationssymbol in der Adressleiste sehen. Du kannst auch die Offline-Fähigkeit testen, indem du die Anwendung im Browser öffnest, das Netzwerk deaktivierst und die Seite neu lädst. Die Ressourcen sollten weiterhin verfügbar sein.
                    </p>

                    <p className="mb-8">
                        Im nächsten Schritt solltest du das Manifest anpassen, um die Identität der Anwendung festzulegen. Hier ist ein Beispiel, wie du das Manifest konfigurieren kannst:
                    </p>

                    <div className="code-container">
                        <CopyButton
                            textToCopy={`manifest: {
  theme_color: "#000508",
  background_color: "#FFDDD2",
  display: "standalone",
  scope: "/",
  start_url: "/",
  name: "SWFirst",
  short_name: "SWFirst",
  description: "Service Worker are great!",
  icons: [
    {
      src: "icons/icon-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "icons/icon-256x256.png",
      sizes: "256x256",
      type: "image/png"
    },
    {
      src: "icons/icon-384x384.png",
      sizes: "384x384",
      type: "image/png"
    },
    {
      src: "icons/icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any"
    },
    {
      src: "icons/icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable"
    }
  ],
  screenshots: [
    {
      src: 'icons/screenshot1.png',
      sizes: '512x512',
      type: 'image/png',
      form_factor: 'wide',
    },
    {
      src: 'icons/screenshot1.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
}`}
                            buttonId="manifest"
                            copiedButton={copiedButton}
                            onCopy={handleCopy}
                        />
                        <pre className="whitespace-pre-wrap break-words">{`
manifest: {
  theme_color: "#000508",
  background_color: "#FFDDD2",
  display: "standalone",
  scope: "/",
  start_url: "/",
  name: "SWFirst",
  short_name: "SWFirst",
  description: "Service Worker are great!",
  icons: [
    {
      src: "icons/icon-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "icons/icon-256x256.png",
      sizes: "256x256",
      type: "image/png"
    },
    {
      src: "icons/icon-384x384.png",
      sizes: "384x384",
      type: "image/png"
    },
    {
      src: "icons/icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "any"
    },
    {
      src: "icons/icon-512x512.png",
      sizes: "512x512",
      type: "image/png",
      purpose: "maskable"
    }
  ],
  screenshots: [
    {
      src: 'icons/screenshot1.png',
      sizes: '512x512',
      type: 'image/png',
      form_factor: 'wide',
    },
    {
      src: 'icons/screenshot1.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
}`}</pre>
                    </div>

                    <p className="my-8">
                        In dieser Manifest-Konfiguration wurden verschiedene Eigenschaften der Anwendung festgelegt:
                        <ul className="mt-4 list-disc list-inside">
                            <li>
                                <strong className="text-accent">theme_color</strong>: Die Farbe, die für die Titelleiste und das Hintergrunddesign verwendet wird.
                            </li>
                            <li>
                                <strong className="text-accent">background_color</strong>: Die Hintergrundfarbe der Anwendung.
                            </li>
                            <li>
                                <strong className="text-accent">display</strong>: Definiert, wie die Anwendung angezeigt wird, z.B. als Standalone-Anwendung.
                            </li>
                            <li>
                                <strong className="text-accent">scope</strong>: Der Bereich der Anwendung.
                            </li>
                            <li>
                                <strong className="text-accent">start_url</strong>: Die URL, die beim Start der Anwendung geladen wird.
                            </li>
                            <li>
                                <strong className="text-accent">name</strong> und <strong className="text-accent">short_name</strong>: Der Name und Kurzname der Anwendung.
                            </li>
                            <li>
                                <strong className="text-accent">description</strong>: Eine kurze Beschreibung der Anwendung.
                            </li>
                            <li>
                                <strong className="text-accent">icons</strong>: Eine Liste von Symbolen in verschiedenen Größen und Zwecken.
                            </li>
                            <li>
                                <strong className="text-accent">screenshots</strong>: Screenshots der Anwendung.
                            </li>
                        </ul>
                    </p>
                    <p className="mb-8">Schaust du in die Dev-Tools deines Browsers, wird dir unter Manifest angezeigt, welche Assets du vielleicht noch benötigst, und wie diese dimensioniert werden müssen. Dort findest du auch i.d.R. einen Link zu detaillierteren Erklärungen zu einzelnen Assets. <br />
                        Ich habe meine Assets mit Affinity Designer erstellt und diese im Public Ordner meiner Anwendung gespeichert.
                    </p>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest" target="blank" className="text-accent">Weitere Infos zum Manifest</a>

                </div>

                <div className="w-full h-1 bg-[#1FFFC9] my-6"></div>

                {/* Schritt 9: Optionale Ergänzungen */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Optionale Ergänzungen</h3>

                    <p className="mb-8">
                        Um die Anwendung verfügbar zu machen, nutze ich GitHub für die Versionskontrolle und Vercel für das Continuous Deployment (CD). Das bedeutet, dass die Anwendung bei jedem Push in das GitHub-Repository automatisch auf Vercel bereitgestellt wird.
                    </p>

                    <p className="mb-8">
                        Zusätzlich wurden TailwindCSS und Framer Motion installiert, um die Benutzeroberfläche zu gestalten und Animationen zu ermöglichen. Weitere Informationen zu den Installations- und Nutzungsschritten findest du hier:
                        <ul className="mt-4 list-disc list-inside">
                            <li><a href="https://tailwindcss.com/docs/installation/using-postcss" target="blank" className="text-accent underline">TailwindCSS</a></li>
                            <li><a href="https://www.framer.com/motion/?utm_source=google&utm_medium=adwords&utm_campaign=PerformanceMax-Framer_&gad_source=1&gclid=Cj0KCQjw-uK0BhC0ARIsANQtgGOrY2TND4HAQVVB0mZdWaJ2_Z2uB9FNosFJGkBC1WsDge6k1VCoMFsaAjSrEALw_wcB" target="blank" className="text-accent underline">Framer Motion</a></li>
                        </ul>
                    </p>

                    <p className="mb-8">
                        Die Anwendung ist jetzt grundsätzlich bereit und kann nach Belieben erweitert und bearbeitet werden. Weitere Anpassungen und Funktionen können hinzugefügt werden, um die Anwendung genau an deine Bedürfnisse anzupassen.
                    </p>
                </div>

                <div className="w-full h-1 bg-[#1FFFC9] my-6"></div>

                {/* Abschnitt: Eigene Service Worker mit Vite PWA und Workbox */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Eigene Service Worker mit Vite PWA und Workbox</h3>

                    <p className="mb-8">
                        Vite PWA integriert die Workbox-Bibliothek und generiert automatisch mehrere Dateien, um die grundlegenden Funktionen eines Service Workers bereitzustellen. Diese Dateien findest du im Ordner <code className="text-accent italic">dev-dist</code> deiner Anwendung. Dazu gehören:
                    </p>
                    <ul className="list-disc list-inside mb-8">
                        <li><code className="text-accent">suppress-warnings.js</code>: Diese Datei unterdrückt bestimmte Warnungen während der Entwicklung.</li>
                        <li><code className="text-accent">sw.js</code>: Dies ist das Haupt-Service-Worker-Skript, das von Workbox generiert wird.</li>
                        <li><code className="text-accent">workbox-b5f7729d.js</code>: Dies ist eine von Workbox generierte Datei, die notwendige Bibliotheksfunktionen bereitstellt. Die Zahlen können je nach Version variieren.</li>
                    </ul>

                    <h4 className="text-2xl font-semibold my-4">Was ist Workbox?</h4>
                    <p className="mb-8">
                        Workbox ist eine leistungsstarke JavaScript-Bibliothek, die von Google entwickelt wurde, um die Erstellung von Service Workern zu vereinfachen. Sie bietet eine Reihe von Werkzeugen und APIs, die die Implementierung von Caching-Strategien, das Vorladen von Ressourcen und das Managen von Updates erleichtern. Workbox abstrahiert viele der komplexen Aspekte der Service Worker-Programmierung und macht es einfacher, zuverlässige und leistungsstarke Progressive Web Apps (PWAs) zu erstellen.
                    </p>

                    <h4 className="text-2xl font-semibold my-4">Anpassen und Erweitern des generierten Service Worker Skripts</h4>
                    <p className="mb-8">
                        Das generierte <code>sw.js</code> Skript kann angepasst werden, um zusätzliche Funktionalitäten und Caching-Strategien hinzuzufügen. Hier ist ein Beispiel, wie du das generierte Skript erweitern kannst:
                    </p>

                    <div className="code-container">
                        <CopyButton
                            textToCopy={`import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Vorhandene Ressourcen vorab zwischenspeichern und routen
precacheAndRoute(self.__WB_MANIFEST);

// Zusätzliche API-Anfragen zwischenspeichern
registerRoute(
  ({request}) => request.destination === 'script' || request.destination === 'style',
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);`}
                            buttonId="custom-sw"
                            copiedButton={copiedButton}
                            onCopy={handleCopy}
                        />
                        <pre className="whitespace-pre-wrap break-words">{`
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

// Vorhandene Ressourcen vorab zwischenspeichern und routen
precacheAndRoute(self.__WB_MANIFEST);

// Zusätzliche API-Anfragen zwischenspeichern
registerRoute(
  ({request}) => request.destination === 'script' || request.destination === 'style',
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);
    `}</pre>
                    </div>


                </div>

                <p className="my-8">
                    Weitere Informationen zu Workbox findest du in der offiziellen <a href="https://developers.google.com/web/tools/workbox" target="blank" className="text-accent underline">Workbox-Dokumentation</a>.
                </p>
            </div>
        </section>
    );
};

export default Tutorial;
