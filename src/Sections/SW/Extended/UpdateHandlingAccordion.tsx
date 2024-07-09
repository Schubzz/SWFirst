import React from 'react';

const UpdateHandlingAccordion: React.FC = () => {
    return (
        <div className='my-6'>
            <details>
                <summary className='text-accent'>Code Description</summary>
                <div className="max-w-[80vw] md:max-w-full p-2 bg-slate-900">
                    <pre className='code-container'>
{`self.addEventListener('updatefound', () => {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            <p>Diese Zeile registriert einen Event-Listener für das <code>updatefound</code>-Ereignis des Service Workers. Dies wird aufgerufen, wenn ein neuer Service Worker gefunden wird.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`const installingWorker = self.installing;`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            <p>Speichert den installierenden Service Worker zur späteren Überprüfung seines Zustands.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`installingWorker.onstatechange = () => {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            <p>Registriert eine Event-Listener-Funktion, die aufgerufen wird, wenn sich der Zustand des installierenden Service Workers ändert.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`if (installingWorker.state === 'installed') {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            <p>Überprüft, ob der Service Worker erfolgreich installiert wurde.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`if (navigator.serviceWorker.controller) {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            <p>Überprüft, ob es einen aktiven Service Worker gibt. Wenn ja, bedeutet dies, dass ein neuer Inhalt verfügbar ist und der Benutzer aufgefordert werden sollte, die Seite zu aktualisieren.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`console.log('New content is available; please refresh.');`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            <p>Protokolliert eine Nachricht, dass neuer Inhalt verfügbar ist und der Benutzer die Seite aktualisieren sollte.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`} else {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            <p>Andernfalls, wenn es keinen aktiven Service Worker gibt, bedeutet dies, dass der Inhalt jetzt für die Offline-Nutzung zwischengespeichert wurde.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`console.log('Content is cached for offline use.');`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            <p>Protokolliert eine Nachricht, dass der Inhalt jetzt für die Offline-Nutzung zwischengespeichert wurde.</p>
                        </div>
                    </div>
                </div>
            </details>
        </div>
    );
}

export default UpdateHandlingAccordion;
