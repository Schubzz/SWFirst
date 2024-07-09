import { useState } from 'react';
import CopyButton from '../../../Components/CopyButton';
import BackgroundSyncAccordion from './BackgroundSyncAccordion';
import PeriodicSyncAccordion from './PeriodicSyncAccordion';
import PushNotificationAccordion from './PushNotificationAccordion';
import UpdateHandlingAccordion from './UpdateHandlingAccordion';

const Extended = () => {
    const [copiedButton, setCopiedButton] = useState<string | null>(null);

    const handleCopy = (buttonId: string) => {
        setCopiedButton(buttonId);
        setTimeout(() => setCopiedButton(null), 2000);
    };

    return (
        <section className="custom-shadow p-10 flex flex-col gap-10 overflow-x-hidden items-center justify-center min-h-screen w-screen bg-black bg-opacity-50 text-white">
            <div className="max-w-4xl w-full">
                <h2 className="text-5xl font-bold mb-8 text-center">Konzepte</h2>

                {/* Hintergrundsynchronisation */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Hintergrundsynchronisation</h3>

                    <p className="mb-8">
                        Hintergrundsynchronisation ermöglicht es, Daten im Hintergrund zu synchronisieren, auch wenn die Anwendung nicht aktiv genutzt wird. Dies verbessert die Zuverlässigkeit und Benutzererfahrung.
                    </p>

                    <div className="relative code-container bg-gray-800 rounded-md p-4 w-full">
                        <CopyButton
                            textToCopy={`self.addEventListener('sync', event => {
  if (event.tag === 'sync-tag') {
    event.waitUntil(
      // Logik zur Hintergrundsynchronisation hier
    );
  }
});`}
                            buttonId="background-sync"
                            copiedButton={copiedButton}
                            onCopy={handleCopy}
                        />
                        <pre className="whitespace-pre-wrap break-words w-full h-auto">{`
self.addEventListener('sync', event => {
  if (event.tag === 'sync-tag') {
    event.waitUntil(
      // Logik zur Hintergrundsynchronisation hier
    );
  }
});
                        `}</pre>
                    </div>
                    <BackgroundSyncAccordion />
                </div>

                <div className="w-full h-1 bg-[#1FFFC9] my-6"></div>

                {/* Push-Benachrichtigungen */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Push-Benachrichtigungen</h3>

                    <p className="mb-8">
                        Push-Benachrichtigungen ermöglichen es, Benutzer über wichtige Ereignisse zu informieren, auch wenn die Webanwendung geschlossen ist.
                    </p>

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
                            buttonId="push-notifications"
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
                    <PushNotificationAccordion />
                </div>

                <div className="w-full h-1 bg-[#1FFFC9] my-6"></div>

                {/* Periodische Hintergrundsynchronisation */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Periodische Hintergrundsynchronisation</h3>

                    <p className="mb-8">
                        Diese Funktion ermöglicht es, regelmäßige Hintergrundaufgaben auszuführen, z.B. das Aktualisieren von Inhalten.
                    </p>

                    <div className="relative code-container bg-gray-800 rounded-md p-4 w-full">
                        <CopyButton
                            textToCopy={`self.addEventListener('periodicsync', event => {
  if (event.tag === 'periodic-sync-tag') {
    event.waitUntil(
      // Logik für periodische Hintergrundsynchronisation
    );
  }
});`}
                            buttonId="periodic-sync"
                            copiedButton={copiedButton}
                            onCopy={handleCopy}
                        />
                        <pre className="whitespace-pre-wrap break-words w-full h-auto">{`
self.addEventListener('periodicsync', event => {
  if (event.tag === 'periodic-sync-tag') {
    event.waitUntil(
      // Logik für periodische Hintergrundsynchronisation
    );
  }
});
                        `}</pre>
                    </div>
                    <PeriodicSyncAccordion />
                </div>

                <div className="w-full h-1 bg-[#1FFFC9] my-6"></div>

                {/* Update-Handling */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                    <h3 className="text-3xl font-semibold my-6">Update-Handling</h3>

                    <p className="mb-8">
                        Diese Funktion ermöglicht es, Benutzer über neue Inhalte zu informieren und die Anwendung zu aktualisieren.
                    </p>

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
                            buttonId="update-handling"
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
                    <UpdateHandlingAccordion />
                </div>
            </div>
        </section>
    );
};

export default Extended;
