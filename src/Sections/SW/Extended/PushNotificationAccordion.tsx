import React from 'react';

const PushNotificationAccordion: React.FC = () => {
    return (
        <div className='my-6'>
            <details>
                <summary className='text-accent'>Code Description</summary>
                <div className="p-6 bg-slate-900">
                    <pre className='code-container'>
{`self.addEventListener('push', event => {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            <p>Diese Zeile registriert einen Event-Listener für das <code>push</code>-Ereignis des Service Workers. Dies wird aufgerufen, wenn eine Push-Benachrichtigung empfangen wird.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`const data = event.data.json();`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            <p>Analysiert die empfangenen Daten und konvertiert sie in ein JSON-Format für die weitere Verarbeitung.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`const options = {`}
                    </pre>
                    <pre className='code-container'>
{`body: data.body,`}
                    </pre>
                    <pre className='code-container'>
{`icon: 'icon.png',`}
                    </pre>
                    <pre className='code-container'>
{`badge: 'badge.png'`}
                    </pre>
                    <pre className='code-container'>
{`};`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            <p>Definiert die Optionen für die Push-Benachrichtigung, einschließlich Text, Icon und Badge.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`event.waitUntil(`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            <p>Verhindert, dass der Service Worker das Push-Ereignis vorzeitig beendet, bevor die Benachrichtigung angezeigt wird.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`self.registration.showNotification(data.title, options)`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            <p>Zeigt die Push-Benachrichtigung mit den angegebenen Optionen an.</p>
                        </div>
                    </div>
                </div>
            </details>
        </div>
    );
}

export default PushNotificationAccordion;
