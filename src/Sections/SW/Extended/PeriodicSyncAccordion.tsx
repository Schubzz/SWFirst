import React from 'react';

const PeriodicSyncAccordion: React.FC = () => {
    return (
        <div className='my-6'>
            <details>
                <summary className='text-accent'>Code Description</summary>
                <div className="p-6 bg-slate-900">
                    <pre className='code-container'>
{`self.addEventListener('periodicsync', event => {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            <p>Diese Zeile registriert einen Event-Listener für das <code>periodicsync</code>-Ereignis des Service Workers. Dies wird aufgerufen, wenn eine periodische Hintergrundsynchronisation stattfindet.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`if (event.tag === 'periodic-sync-tag') {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            <p>Überprüft, ob der Synchronisations-Tag mit dem erwarteten Wert übereinstimmt. Dies stellt sicher, dass nur spezifische periodische Synchronisationsereignisse behandelt werden.</p>
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
{`// Logik für periodische Hintergrundsynchronisation`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            <p>Platz für die Logik zur periodischen Hintergrundsynchronisation, wie z.B. das Aktualisieren von Inhalten oder das Senden von Daten an den Server.</p>
                        </div>
                    </div>
                </div>
            </details>
        </div>
    );
}

export default PeriodicSyncAccordion;
