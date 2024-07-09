const ActivationAccordion = () => {
    return (
        <div className='my-6'>
            <details>
                <summary className='text-accent'>Code description</summary>
                <div className="max-w-[80vw] md:max-w-full p-2 bg-slate-900">
                    <pre className='code-container'>
{`self.addEventListener('activate', event => {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Diese Zeile registriert einen Event-Listener für das <code>activate</code>-Ereignis des Service Workers. Dies wird aufgerufen, wenn der Service Worker aktiviert wird.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`var cacheWhitelist = ['v2'];`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Erstellt eine Whitelist der Cache-Namen, die behalten werden sollen. In diesem Fall ist es nur 'v2'.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`event.waitUntil(`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Die Methode <code>event.waitUntil</code> nimmt ein Promise entgegen und verhindert, dass der Service Worker aktiviert wird, bis das Promise aufgelöst wird.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`caches.keys().then(keyList => {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Gibt eine Liste aller Cache-Namen zurück.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`return Promise.all(keyList.map(key => {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Erstellt ein Promise für jeden Cache-Namen.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`if (cacheWhitelist.indexOf(key) === -1) {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Überprüft, ob der aktuelle Cache-Name in der Whitelist enthalten ist. Wenn nicht, wird der Cache gelöscht.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`return caches.delete(key);`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Löscht den Cache mit dem entsprechenden Namen.</p>
                        </div>
                    </div>
                </div>
            </details>
        </div>
    );
}

export default ActivationAccordion;
