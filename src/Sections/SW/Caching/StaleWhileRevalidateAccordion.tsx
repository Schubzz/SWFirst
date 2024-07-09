const StaleWhileRevalidateAccordion = () => {
  return (
      <div className='my-6'>
          <details>
              <summary className='text-accent'>Code Description</summary>
              <div className="p-6 bg-slate-900">
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
{`caches.match(event.request).then(response => {`}
                  </pre>
                  <div className="flex flex-col gap-4 my-4">
                      <div>
                         
                          <p>Diese Zeile versucht, die angeforderte Ressource im Cache zu finden. Wenn sie im Cache gefunden wird, wird sie sofort zurückgegeben.</p>
                      </div>
                  </div>

                  <pre className='code-container'>
{`const fetchPromise = fetch(event.request).then(networkResponse => {`}
                  </pre>
                  <div className="flex flex-col gap-4 my-4">
                      <div>
                         
                          <p>Diese Zeile stellt eine Netzwerk-Anfrage, um die Ressource zu holen und den Cache zu aktualisieren.</p>
                      </div>
                  </div>

                  <pre className='code-container'>
{`caches.open('v1').then(cache => {`}
                  </pre>
                  <div className="flex flex-col gap-4 my-4">
                      <div>
                         
                          <p>Öffnet den Cache mit dem Namen 'v1'.</p>
                      </div>
                  </div>

                  <pre className='code-container'>
{`cache.put(event.request, networkResponse.clone());`}
                  </pre>
                  <div className="flex flex-col gap-4 my-4">
                      <div>
                         
                          <p>Speichert die neue Ressource im Cache.</p>
                      </div>
                  </div>

                  <pre className='code-container'>
{`return networkResponse;`}
                  </pre>
                  <div className="flex flex-col gap-4 my-4">
                      <div>
                         
                          <p>Gibt die Netzwerk-Antwort zurück, sobald sie verfügbar ist.</p>
                      </div>
                  </div>

              </div>
          </details>
      </div>
  );
}

export default StaleWhileRevalidateAccordion;
