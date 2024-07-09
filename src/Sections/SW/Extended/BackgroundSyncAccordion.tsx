import React from 'react';

const BackgroundSyncAccordion: React.FC = () => {
    return (
        <div className='my-6'>
            <details>
                <summary className='text-accent'>Code Description</summary>
                <div className="max-w-[80vw] md:max-w-full p-2 bg-slate-900">
                    <pre className='code-container'>
{`self.addEventListener('sync', event => {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            <p>Diese Zeile registriert einen Event-Listener für das <code>sync</code>-Ereignis des Service Workers. Dies wird aufgerufen, wenn eine Synchronisation im Hintergrund stattfindet.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`if (event.tag === 'sync-tag') {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            <p>Überprüft, ob der Synchronisations-Tag mit dem erwarteten Wert übereinstimmt. Dies stellt sicher, dass nur spezifische Synchronisationsereignisse behandelt werden.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`event.waitUntil(`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            <p>Die Methode <code>event.waitUntil</code> nimmt ein Promise entgegen und verhindert, dass der Service Worker das Synchronisations-Ereignis vorzeitig beendet.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`// Logik zur Hintergrundsynchronisation hier`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            <p>Platz für die Logik zur Hintergrundsynchronisation, wie z.B. das Senden von Daten an den Server oder das Aktualisieren von Inhalten.</p>
                        </div>
                    </div>
                </div>
            </details>
        </div>
    );
}

export default BackgroundSyncAccordion;
