import { useState } from 'react';
import CopyButton from '../../../Components/CopyButton';
import NetworkFirstAccordion from './NetworkFirstAccordion';
import StaleWhileRevalidateAccordion from './StaleWhileRevalidateAccordion';
import DynamicCachingAccordion from './DynamicCachingAccordion';
import CacheFirstAccordion from './CacheFirstAccordion';

const CachingStrategies = () => {
    const [copiedButton, setCopiedButton] = useState<string | null>(null);

    const handleCopy = (buttonId: string) => {
        setCopiedButton(buttonId);
        setTimeout(() => setCopiedButton(null), 2000);
    };

    return (
        <section className="custom-shadow p-10 flex flex-col gap-10 overflow-x-hidden items-center justify-center min-h-screen w-screen bg-black bg-opacity-50 text-white">
            <div className="max-w-4xl w-full">
                <h2 className="text-5xl font-bold mb-8 text-center">Caching</h2>

                {/* Überblick über Caching */}
                <div className="mb-8 flex flex-wrap flex-col relative">

                    <p className="mb-8">
                    Caching-Strategien sind essentielle Techniken zur Verbesserung der Leistung und Benutzerfreundlichkeit von Webanwendungen. Durch das Speichern und Wiederverwenden von Ressourcen wie HTML-Dokumenten, CSS-Dateien, JavaScript-Dateien und Bildern können Ladezeiten erheblich reduziert und die Effizienz der Anwendung gesteigert werden. Diese Strategien sind besonders nützlich für Anwendungen, die offline oder bei schlechten Netzwerkbedingungen funktionieren sollen.
                    </p>
                </div>

                {/* Cache First */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Cache First Strategie</h3>

                    <p className="mb-8">
                        Diese Strategie sucht zuerst im Cache nach einer Antwort. Wenn die Antwort nicht im Cache vorhanden ist, wird eine Netzwerk-Anfrage gestellt. Dies führt zu schnelleren Ladezeiten bei wiederholten Besuchen.
                    </p>

                    <div className="relative code-container bg-gray-800 rounded-md p-4 w-full">
                        <CopyButton
                            textToCopy={`self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});`}
                            buttonId="cache-first"
                            copiedButton={copiedButton}
                            onCopy={handleCopy}
                        />
                        <pre className="whitespace-pre-wrap break-words w-full h-auto">{`
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
                        `}</pre>
                    </div>
                            <CacheFirstAccordion />
                </div>

                <div className="w-full h-1 bg-[#1FFFC9] my-6"></div>

                {/* Network First */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Network First Strategie</h3>

                    <p className="mb-8">
                        Diese Strategie stellt zuerst eine Netzwerk-Anfrage. Wenn die Anfrage fehlschlägt (z.B. weil der Benutzer offline ist), wird die Antwort aus dem Cache geliefert. Dies stellt sicher, dass die neuesten Daten verwendet werden.
                    </p>

                    <div className="relative code-container bg-gray-800 rounded-md p-4 w-full">
                        <CopyButton
                            textToCopy={`self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});`}
                            buttonId="network-first"
                            copiedButton={copiedButton}
                            onCopy={handleCopy}
                        />
                        <pre className="whitespace-pre-wrap break-words w-full h-auto">{`
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
                        `}</pre>
                    </div>
                    <NetworkFirstAccordion />
                </div>

                <div className="w-full h-1 bg-[#1FFFC9] my-6"></div>

                {/* Stale-While-Revalidate */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Stale-While-Revalidate Strategie</h3>

                    <p className="mb-8">
                        Diese Strategie liefert eine gecachte Antwort sofort und aktualisiert gleichzeitig den Cache im Hintergrund mit einer neuen Antwort vom Netzwerk. Dies bietet eine Kombination aus schneller Reaktion und aktuellen Daten.
                    </p>

                    <div className="relative code-container bg-gray-800 rounded-md p-4 w-full">
                        <CopyButton
                            textToCopy={`self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        caches.open('v1').then(cache => {
          cache.put(event.request, networkResponse.clone());
        });
        return networkResponse;
      });
      return response || fetchPromise;
    })
  );
});`}
                            buttonId="stale-while-revalidate"
                            copiedButton={copiedButton}
                            onCopy={handleCopy}
                        />
                        <pre className="whitespace-pre-wrap break-words w-full h-auto">{`
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        caches.open('v1').then(cache => {
          cache.put(event.request, networkResponse.clone());
        });
        return networkResponse;
      });
      return response || fetchPromise;
    })
  );
});
                        `}</pre>
                    </div>
                    <StaleWhileRevalidateAccordion />
                </div>

                <div className="w-full h-1 bg-[#1FFFC9] my-6"></div>

                {/* Dynamisches Caching */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Dynamisches Caching</h3>

                    <p className="mb-8">
                        Dynamisches Caching ermöglicht es, zur Laufzeit Ressourcen im Cache zu speichern. Dies ist besonders nützlich für Ressourcen, deren Inhalt sich häufig ändert.
                    </p>

                    <div className="relative code-container bg-gray-800 rounded-md p-4 w-full">
                        <CopyButton
                            textToCopy={`self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open('dynamic-cache').then(cache => {
      return cache.match(event.request).then(response => {
        if (response) {
          return response;
        } else {
          return fetch(event.request).then(networkResponse => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        }
      });
    })
  );
});`}
                            buttonId="dynamic-caching"
                            copiedButton={copiedButton}
                            onCopy={handleCopy}
                        />
                        <pre className="whitespace-pre-wrap break-words w-full h-auto">{`
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open('dynamic-cache').then(cache => {
      return cache.match(event.request).then(response => {
        if (response) {
          return response;
        } else {
          return fetch(event.request).then(networkResponse => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        }
      });
    })
  );
});
                        `}</pre>
                    </div>
                    <DynamicCachingAccordion />
                </div>
            </div>
        </section>
    );
};

export default CachingStrategies;