const FetchAccordion = () => {
    return (
        <div className='my-6'>
            <details>
                <summary className='text-accent'>Code description</summary>
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
{`caches.match(event.request)`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Versucht, die angeforderte Ressource im Cache zu finden.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`.then(response => {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Wenn die Ressource im Cache gefunden wird, wird sie zurückgegeben.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`return response || fetch(event.request);`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Wenn die Ressource nicht im Cache gefunden wird, wird eine Netzwerkanfrage ausgeführt.</p>
                        </div>
                    </div>
                </div>
            </details>
        </div>
    );
}

export default FetchAccordion;
