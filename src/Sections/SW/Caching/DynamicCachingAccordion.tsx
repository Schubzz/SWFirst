const DynamicCachingAccordion = () => {
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
{`caches.open('dynamic-cache').then(cache => {`}
                  </pre>
                  <div className="flex flex-col gap-4 my-4">
                      <div>
                          
                          <p>Öffnet einen Cache mit dem Namen 'dynamic-cache'.</p>
                      </div>
                  </div>

                  <pre className='code-container'>
{`return cache.match(event.request).then(response => {`}
                  </pre>
                  <div className="flex flex-col gap-4 my-4">
                      <div>
                          
                          <p>Versucht, die angeforderte Ressource im Cache zu finden.</p>
                      </div>
                  </div>

                  <pre className='code-container'>
{`if (response) {`}
                  </pre>
                  <div className="flex flex-col gap-4 my-4">
                      <div>
                          
                          <p>Wenn die Ressource im Cache gefunden wird, wird sie zurückgegeben.</p>
                      </div>
                  </div>

                  <pre className='code-container'>
{`return response;`}
                  </pre>
                  <div className="flex flex-col gap-4 my-4">
                      <div>
                          
                          <p>Gibt die gecachte Ressource zurück.</p>
                      </div>
                  </div>

                  <pre className='code-container'>
{`} else {`}
                  </pre>
                  <div className="flex flex-col gap-4 my-4">
                      <div>
                          
                          <p>Wenn die Ressource nicht im Cache gefunden wird, wird eine Netzwerk-Anfrage gestellt.</p>
                      </div>
                  </div>

                  <pre className='code-container'>
{`return fetch(event.request).then(networkResponse => {`}
                  </pre>
                  <div className="flex flex-col gap-4 my-4">
                      <div>
                          
                          <p>Stellt eine Netzwerk-Anfrage, um die Ressource zu erhalten.</p>
                      </div>
                  </div>

                  <pre className='code-container'>
{`cache.put(event.request, networkResponse.clone());`}
                  </pre>
                  <div className="flex flex-col gap-4 my-4">
                      <div>
                          
                          <p>Speichert die erhaltene Antwort im Cache, sodass sie bei zukünftigen Anfragen verwendet werden kann.</p>
                      </div>
                  </div>

                  <pre className='code-container'>
{`return networkResponse;`}
                  </pre>
                  <div className="flex flex-col gap-4 my-4">
                      <div>
                          
                          <p>Gibt die Netzwerk-Antwort zurück.</p>
                      </div>
                  </div>

              </div>
          </details>
      </div>
  );
}

export default DynamicCachingAccordion;
