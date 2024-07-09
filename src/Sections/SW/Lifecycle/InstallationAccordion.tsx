const InstallationAccordion = () => {
    return (
        <div className='my-6'>
            <details>
                <summary className='text-accent'>Code description</summary>
                <div className="max-w-[80vw] md:max-w-full p-2 bg-slate-900">
                    <pre className='code-container'>
                        {`self.addEventListener('install', event => {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Diese Zeile registriert einen Event-Listener für das <code>install</code>-Ereignis des Service Workers. Dies wird aufgerufen, wenn der Service Worker installiert wird.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
                        {`event.waitUntil(`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Die Methode <code>event.waitUntil</code> nimmt ein Promise entgegen und verhindert, dass der Service Worker installiert wird, bis das Promise aufgelöst wird.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
                        {`caches.open('v1').then(cache => {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Öffnet einen Cache mit dem Namen 'v1'. Falls der Cache nicht existiert, wird er erstellt.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
                        {`return cache.addAll([`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Fügt die angegebenen Ressourcen zum Cache hinzu ('/index.html',
                                '/styles.css',
                                '/script.js',
                                '/image.png').
                            </p>
                        </div>
                    </div>
                </div>
            </details>
        </div>
    );
}

export default InstallationAccordion;
