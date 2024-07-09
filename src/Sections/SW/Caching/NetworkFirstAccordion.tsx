const NetworkFirstAccordion = () => {
    return (
        <div className='my-6'>
            <details>
                <summary className='text-accent'>Code Description</summary>
                <div className="max-w-[80vw] md:max-w-full p-2 bg-slate-900">
                    <pre className='code-container'>
{`self.addEventListener('fetch', event => {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Diese Zeile registriert einen Event-Listener für das <code>fetch</code>-Ereignis des Service Workers. Dies wird aufgerufen, wenn eine Netzwerkanfrage abgefangen wird.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`event.respondWith(`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Die Methode <code>event.respondWith</code> nimmt ein Promise entgegen und liefert die Antwort für die Netzwerkanfrage.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`fetch(event.request).catch(() => caches.match(event.request))`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Diese Zeile versucht, die angeforderte Ressource über das Netzwerk zu holen. Sollte dies fehlschlagen, wird die Ressource aus dem Cache bereitgestellt.</p>
                        </div>
                    </div>

                </div>
            </details>
        </div>
    );
}

export default NetworkFirstAccordion;
