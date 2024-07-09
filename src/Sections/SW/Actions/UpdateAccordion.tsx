const UpdateAccordion = () => {
    return (
        <div className='my-6'>
            <details>
                <summary className='text-accent'>Code description</summary>
                <div className="max-w-[80vw] md:max-w-full p-2 bg-slate-900">
                    <pre className='code-container'>
{`self.addEventListener('updatefound', () => {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Diese Zeile registriert einen Event-Listener für das <code>updatefound</code>-Ereignis des Service Workers. Dies wird aufgerufen, wenn ein neues Update des Service Workers gefunden wird.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`const installingWorker = self.installing;`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Speichert den gerade installierenden Service Worker in einer Variablen.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`installingWorker.onstatechange = () => {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Registriert einen Event-Listener für das <code>statechange</code>-Ereignis des installierenden Service Workers.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`if (installingWorker.state === 'installed') {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Überprüft, ob der neue Service Worker installiert wurde.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`if (navigator.serviceWorker.controller) {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Überprüft, ob bereits ein aktiver Service Worker vorhanden ist.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`console.log('New content is available; please refresh.');`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Gibt eine Meldung in der Konsole aus, dass neue Inhalte verfügbar sind und die Seite aktualisiert werden sollte.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`} else {`}
                    </pre>

                    <pre className='code-container'>
{`console.log('Content is cached for offline use.');`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Gibt eine Meldung in der Konsole aus, dass die Inhalte für die Offline-Nutzung zwischengespeichert wurden.</p>
                        </div>
                    </div>
                </div>
            </details>
        </div>
    );
}

export default UpdateAccordion;
