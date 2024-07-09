import { FaArrowRightLong } from "react-icons/fa6"
import { Link } from "react-router-dom"

const VitePWA = () => {
    return (
        <section>
            <div
                className="flex flex-wrap p-10 bg-black bg-opacity-50 overflow-x-hidden justify-center items-center gap-20 md:gap-60 md:gap-y-2 md:min-h-[80vh] w-screen">

                <div>
                    <h2 className="mb-6 text-left text-3xl md:text-5xl"><span
                        className="text-white">Resumé</span><br /> Service Worker</h2>
                    <p className="text-[1rem] md:text-xl max-w-lg">
                        Service Worker sind eine transformative Technologie im Web-Ökosystem, die weitreichende Verbesserungen in Bezug auf Performance, Zuverlässigkeit und Benutzerfreundlichkeit ermöglicht. Sie spielen eine entscheidende Rolle bei der Entwicklung moderner Webanwendungen, insbesondere Progressive Web Apps (PWAs), die offline funktionieren und eine native App-ähnliche Erfahrung bieten<span className="text-accent font-extrabold">...</span>
                    </p>
                </div>
                <div>
                    <p className="text-[1rem] md:text-xl max-w-lg">
                        <span className="text-accent font-extrabold">... </span>
                        Allerdings kann die Implementierung von Service Workern komplex und zeitaufwendig sein,
                        da sie ein tiefes Verständnis der Web-APIs und sorgfältiges Management von Caching-Strategien erfordern.
                        Um diese Herausforderung zu bewältigen, stehen allerdings verschiedene Plugins und Tools zur Verfügung,
                        die den Prozess erheblich vereinfachen. Ein prominentes Beispiel hierfür ist das<span className="font-extrabold">
                            <span className="text-yellow-400">Vite</span>P<span className="text-blue-400">W</span>
                            <span className="text-yellow-400">A</span>-Plugin</span>, das eine nahtlose Integration von
                        Service Workern in Vite-Projekte ermöglicht und die Erstellung von PWAs mit minimalem
                        Konfigurationsaufwand unterstützt.
                    </p>

                </div>

            </div>

            <div className="flex items-center justify-center">

            </div>


            <Link to="/pwa">
                <div className="flex justify-center items-center gap-4 bg-black group hover:bg-accent p-6">
                    <p className="group-hover:text-slate-700 group-hover:font-extrabold">Step by Step zur</p>
                    <img src="VitePWA.svg" alt="VitePWA Logo"
                        className="max-h-[10vh] drop-shadow-accent "
                    />

                    <FaArrowRightLong className="text-5xl group-hover:text-white text-accent mb-4 my-auto" />

                </div>
            </Link>

        </section>


    )
}

export default VitePWA