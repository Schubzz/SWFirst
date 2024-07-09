const RegisterAccordion = () => {
    return (
        <div className='my-6'>
            <details>
                <summary className='text-accent'>Code description</summary>
                <div className="max-w-[80vw] md:max-w-full p-2 bg-slate-900">
                    <pre className='code-container'>
{`navigator.serviceWorker.register('/service-worker.js')`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Diese Zeile initiiert die Registrierung eines Service Workers. Der Pfad zur JavaScript-Datei des Service Workers (<code>/service-worker.js</code>) wird als Argument übergeben.</p>
                        </div>
                        <div>
                            <p className='font-bold'>Wichtig:</p>
                            <p>Dies funktioniert nur, wenn der Browser Service Worker unterstützt, daher sollte vorher überprüft werden, ob <i>navigator.serviceWorker</i> existiert.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`.then(function(registration) {`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Diese Methode wird aufgerufen, wenn die Registrierung erfolgreich ist.</p>
                        </div>
                        <div>
                            <p className='font-bold'>Parameter:</p>
                            <p>Die Funktion erhält ein <code>registration</code>-Objekt, das Informationen über die erfolgreiche Registrierung enthält.</p>
                        </div>
                    </div>

                    <pre className='code-container'>
{`console.log('Service Worker registration successful with scope: ', registration.scope);`}
                    </pre>
                    <div className="flex flex-col gap-4 my-4">
                        <div>
                            
                            <p>Diese Zeile gibt eine Erfolgsmeldung in der Konsole aus.</p>
                        </div>
                        <div>
                            <p className='font-bold'>Informationen:</p>
                            <p>Der <code>scope</code> gibt an, auf welchen Teil der Website der Service Worker angewendet wird. Normalerweise ist dies der Verzeichnisbaum, in dem sich die Service Worker-Datei befindet.</p>
                        </div>
                    </div>
                </div>
            </details>
        </div>
    );
}

export default RegisterAccordion;
