const PushAccordion = () => {
    return (
        <div className='my-6'>
            <details>
                <summary className='text-accent'>Code description</summary>
                <div className="max-w-[80vw] md:max-w-full p-2 bg-slate-900">
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
                            
                            <p>Konvertiert die empfangenen Push-Daten in ein JSON-Objekt.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`const options = {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Erstellt ein Objekt mit Optionen für die Benachrichtigung, wie <code>body</code>, <code>icon</code> und <code>badge</code>.</p>
                        </div>
                    </div>

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

                    <pre className='code-container'>
{`event.waitUntil(`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Die Methode <code>event.waitUntil</code> nimmt ein Promise entgegen und zeigt die Benachrichtigung an, bis das Promise aufgelöst wird.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`self.registration.showNotification(data.title, options)`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Zeigt die Benachrichtigung mit dem angegebenen Titel und den Optionen an.</p>
                        </div>
                    </div>
                </div>
            </details>
        </div>
    );
}

export default PushAccordion;
