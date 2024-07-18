const BestPractices = () => {
    return (
        <section className="custom-shadow p-10 flex flex-col gap-10 overflow-x-hidden items-center min-h-screen justify-center  w-screen bg-black  text-white">
            <div className="max-w-4xl w-full">

                {/* Best Practices für Service Worker */}
                <div className="mb-8 flex flex-wrap flex-col relative">
                <h2 className="text-5xl font-bold mb-8 text-center text-white">Best Practices</h2>

                    <p className="mb-8 text-center">
                        Quick Tips
                    </p>
                    <div className="text-gray-300 flex flex-col gap-2">
                        <span className='font-bold text-accent'><h3>Caching Strategien</h3></span>Richtiges Caching kann die Ladezeiten und Performance erheblich verbessern.
                        <span className='font-bold text-accent'><h3>Caches bereinigen</h3></span>Alte oder nicht mehr benötigte Caches regelmäßig entfernen.
                        <span className='font-bold text-accent'><h3>Fallbacks</h3></span>Sicherstellen, dass die Anwendung auch bei Netzwerkfehlern oder Offline-Zustand funktioniert.
                        <span className='font-bold text-accent'><h3>Developer Tools</h3></span>Browser-Entwicklerwerkzeuge nutzen, um Service Worker zu debuggen und zu testen.
                        <span className='font-bold text-accent'><h3>Test</h3></span>Service Worker regelmäßig testen, um sicherzustellen, dass sie wie erwartet funktionieren.
                    </div>
        
                </div>
            </div>
        </section>
    );
};

export default BestPractices;
