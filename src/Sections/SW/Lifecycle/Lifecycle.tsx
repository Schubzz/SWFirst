import { useState } from "react";
import CopyButton from "../../../Components/CopyButton";
import RegisterAccordion from "./RegisterAccordion";
import ActivationAccordion from "./ActivationAccordion";
import InstallationAccordion from "./InstallationAccordion";


const Lifecycle = () => {
  const [copiedButton, setCopiedButton] = useState<string | null>(null);

  const handleCopy = (buttonId: string) => {
    setCopiedButton(buttonId);
    setTimeout(() => setCopiedButton(null), 2000); // Rückmeldung nach 2 Sekunden entfernen
  };

  return (
    <section className="custom-shadow p-10 flex flex-col gap-10 overflow-x-hidden items-center justify-center min-h-screen w-screen bg-black bg-opacity-95 text-white">
      <div className="max-w-4xl w-full">
        <h2 className="text-5xl font-bold mb-8 text-center">Lifecycle</h2>

        {/* Registrierung */}
        <div className="mb-8 flex flex-wrap flex-col relative">
          <h3 className="text-3xl font-semibold my-6">Registrierung</h3>
          
          <p className="mb-6">
            Um einen Service Worker zu nutzen, muss er zunächst im Browser registriert werden. Die Registrierung erfolgt in der Regel im Haupt-JavaScript-Thread der Anwendung.
            Die Registrierung eines Service Workers ist der erste Schritt, um eine Webanwendung offlinefähig
            zu machen und andere PWA-Funktionen zu aktivieren. Dieser Code registriert den Service Worker,
            was bedeutet, dass der Browser das `service-worker.js`-Skript herunterlädt und in der Lage ist,
            es zu installieren und zu aktivieren.
          </p>

          <div className="relative code-container bg-gray-800 rounded-md p-4 w-full">
            <CopyButton
              textToCopy={`navigator.serviceWorker.register('/service-worker.js')
.then(function(registration) {
  console.log('Service Worker registration successful with scope: ', registration.scope);
})
.catch(function(error) {
  console.log('Service Worker registration failed: ', error);
});`}
              buttonId="register"
              copiedButton={copiedButton}
              onCopy={handleCopy}
            />

            <pre className="whitespace-pre-wrap break-words">{`
navigator.serviceWorker.register('/service-worker.js')
  .then(function(registration) {
    console.log('Service Worker registration successful with scope: ', registration.scope);
  })
  .catch(function(error) {
    console.log('Service Worker registration failed: ', error);
  });
                        `}</pre>
          </div>
          <ul className="mt-8">
            <li>• Registriert den Service Worker im Browser.</li>
            <li>• Gibt eine Erfolgsmeldung oder einen Fehler in der Konsole aus.</li>
          </ul>

        <RegisterAccordion />

         
        </div>

        <div className="w-full h-1 bg-[#1FFFC9] my-6"></div>

        {/* Installation */}
        <div className="mb-8 flex flex-wrap flex-col relative">
          <h3 className="text-3xl font-semibold my-6">Installation</h3>

          <p className="mb-8">
            Während des Installationsschrittes lädt der Service Worker Ressourcen herunter und speichert sie
            im Cache. Dies ermöglicht der Webanwendung, diese Ressourcen im Offline-Modus zu nutzen.
          </p>

          <div className="relative code-container bg-gray-800 rounded-md p-4 w-full">
            <CopyButton
              textToCopy={`self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/index.html',
        '/styles.css',
        '/script.js',
        '/image.png'
      ]);
    })
  );
});`}
              buttonId="install"
              copiedButton={copiedButton}
              onCopy={handleCopy}
            />
            <pre className="whitespace-pre-wrap break-words">{`
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/index.html',
        '/styles.css',
        '/script.js',
        '/image.png'
      ]);
    })
  );
});
                        `}</pre>
          </div>
          <ul className="mt-8">
            <li>• Hört auf das Installationsereignis des Service Workers.</li>
            <li>• Öffnet einen neuen Cache und fügt Ressourcen hinzu.</li>
          </ul>

              <InstallationAccordion />

        </div>

        <div className="w-full h-1 bg-[#1FFFC9] my-6"></div>



        {/* Aktivierung */}
        <div className="mb-8 flex flex-wrap flex-col relative">
          <h3 className="text-3xl font-semibold my-6">Aktivierung</h3>

          <p className="mb-8">
            Während des Aktivierungsschrittes übernimmt der neue Service Worker die Kontrolle und entfernt
            alte Caches, die nicht mehr benötigt werden. Dies stellt sicher, dass die Anwendung nur aktuelle
            Ressourcen verwendet.
          </p>

          <div className="relative code-container bg-gray-800 rounded-md p-4 w-full">
            <CopyButton
              textToCopy={`self.addEventListener('activate', event => {
  var cacheWhitelist = ['v2'];
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});`}
              buttonId="activate"
              copiedButton={copiedButton}
              onCopy={handleCopy}
            />
            <pre className="whitespace-pre-wrap break-words">{`
self.addEventListener('activate', event => {
  var cacheWhitelist = ['v2'];
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});
                        `}</pre>
          </div>
          <ul className="mt-8">
            <li>• Hört auf das Aktivierungsereignis des Service Workers.</li>
            <li>• Entfernt alte Caches, die nicht in der Whitelist enthalten sind.</li>
          </ul>

          <ActivationAccordion />

        </div>
      </div>
    </section>
  );
};

export default Lifecycle;
