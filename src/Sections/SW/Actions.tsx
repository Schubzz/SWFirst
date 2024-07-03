import React, { useState } from 'react';
import CopyButton from '../../Components/CopyButton.tsx';

const Actions = () => {
    const [copiedButton, setCopiedButton] = useState<string | null>(null);

    const handleCopy = (buttonId: string) => {
        setCopiedButton(buttonId);
        setTimeout(() => setCopiedButton(null), 2000);
    };

    return (
        <section className="custom-shadow p-10 flex flex-col gap-10 overflow-x-hidden items-center justify-center min-h-screen w-screen bg-black bg-opacity-50 text-white">
            <div className="max-w-4xl w-full">
                <h2 className="text-5xl font-bold mb-8 text-center">Actions</h2>

                {/* Fetch */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Fetch-Ereignis</h3>
                    <div className="relative code-container bg-gray-800 rounded-md p-4 w-full">
                        <CopyButton
                            textToCopy={`self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});`}
                            buttonId="fetch"
                            copiedButton={copiedButton}
                            onCopy={handleCopy}
                        />
                        <pre className="whitespace-pre-wrap break-words w-full h-auto">{`
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
                        `}</pre>
                    </div>
                    <ul className="mt-8">
                        <li>• Hört auf Fetch-Ereignisse, die ausgelöst werden, wenn die Anwendung eine Netzwerkanfrage macht.</li>
                        <li>• Überprüft, ob die angeforderte Ressource im Cache vorhanden ist und liefert sie aus dem Cache oder aus dem Netzwerk.</li>
                    </ul>
                    <p className="mt-8">
                        Das Fetch-Ereignis ermöglicht es dem Service Worker, Netzwerkanfragen abzufangen und Ressourcen aus dem Cache oder dem Netzwerk bereitzustellen. Dies verbessert die Ladezeiten und ermöglicht den Offline-Zugriff auf die Webanwendung.
                    </p>
                </div>

                <div className="w-full h-1 bg-[#1FFFC9] my-6"></div>

                {/* Push */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Push-Ereignis</h3>
                    <div className="relative code-container bg-gray-800 rounded-md p-4 w-full">
                        <CopyButton
                            textToCopy={`self.addEventListener('push', event => {
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: 'icon.png',
    badge: 'badge.png'
  };
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});`}
                            buttonId="push"
                            copiedButton={copiedButton}
                            onCopy={handleCopy}
                        />
                        <pre className="whitespace-pre-wrap break-words w-full h-auto">{`
self.addEventListener('push', event => {
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: 'icon.png',
    badge: 'badge.png'
  };
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});
                        `}</pre>
                    </div>
                    <ul className="mt-8">
                        <li>• Hört auf Push-Ereignisse, die ausgelöst werden, wenn der Server eine Push-Benachrichtigung sendet.</li>
                        <li>• Zeigt die Push-Benachrichtigung mit den angegebenen Optionen an.</li>
                    </ul>
                    <p className="mt-8">
                        Das Push-Ereignis ermöglicht es dem Service Worker, Push-Benachrichtigungen zu empfangen und anzuzeigen. Dies ermöglicht es der Anwendung, Benutzer auch dann zu benachrichtigen, wenn sie nicht aktiv geöffnet ist.
                    </p>
                </div>

                <div className="w-full h-1 bg-[#1FFFC9] my-6"></div>

                {/* Update */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Update</h3>
                    <div className="relative code-container bg-gray-800 rounded-md p-4 w-full">
                        <CopyButton
                            textToCopy={`self.addEventListener('updatefound', () => {
  const installingWorker = self.installing;
  installingWorker.onstatechange = () => {
    if (installingWorker.state === 'installed') {
      if (navigator.serviceWorker.controller) {
        console.log('New content is available; please refresh.');
      } else {
        console.log('Content is cached for offline use.');
      }
    }
  };
});`}
                            buttonId="update"
                            copiedButton={copiedButton}
                            onCopy={handleCopy}
                        />
                        <pre className="whitespace-pre-wrap break-words w-full h-auto">{`
self.addEventListener('updatefound', () => {
  const installingWorker = self.installing;
  installingWorker.onstatechange = () => {
    if (installingWorker.state === 'installed') {
      if (navigator.serviceWorker.controller) {
        console.log('New content is available; please refresh.');
      } else {
        console.log('Content is cached for offline use.');
      }
    }
  };
});
                        `}</pre>
                    </div>
                    <ul className="mt-8">
                        <li>• Hört auf das Update-Ereignis, das ausgelöst wird, wenn ein neuer Service Worker gefunden wird.</li>
                        <li>• Benachrichtigt den Benutzer über neue Inhalte und fordert ihn auf, die Seite zu aktualisieren.</li>
                    </ul>
                    <p className="mt-8">
                        Das Update-Ereignis tritt auf, wenn ein neuer Service Worker gefunden wird. Es ermöglicht der Anwendung, den Benutzer über neue Inhalte zu informieren und gegebenenfalls die Seite neu zu laden, um die neuesten Änderungen zu übernehmen.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Actions;
