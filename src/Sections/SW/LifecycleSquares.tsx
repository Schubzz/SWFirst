import {useState} from 'react';
import {motion} from "framer-motion";
import AnimatedCard from "../../Components/SquareCardSection/AnimatedCard.tsx";
import Dialog from "../../Components/SquareCardSection/Dialog.tsx";
import {IoEnter} from "react-icons/io5";
import {MdInstallDesktop, MdRocketLaunch} from "react-icons/md";


const gridContainerVariants = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
        }
    }
}

const gridSquareVariants = {
    hidden: {opacity: 0},
    show: {opacity: 1}
}

const headingAnimationProps = {
    initial: {opacity: 0, y: 100},
    animate: {opacity: 1, y: 0},
    transition: {duration: 1, ease: "easeOut"}
}

const textAnimationProps = {
    initial: {opacity: 0, y: 100},
    animate: {opacity: 1, y: 0},
    transition: {duration: 1, ease: "easeOut", delay: 0.6}
}

const LifecycleSquares: React.FC = () => {
    const [dialogVisible, setDialogVisible] = useState(false);
    const [dialogPosition, setDialogPosition] = useState({x: 0, y: 0});
    const [dialogContent, setDialogContent] = useState<React.ReactNode>(null);

    const handleCardMouseEnter = (content: React.ReactNode) => {
        setDialogContent(content);
        setDialogVisible(true);
    }

    const handleCardMouseMove = (event: React.MouseEvent) => {
        const {clientX, clientY} = event;
        const offset = 10;
        setDialogPosition({x: clientX + offset, y: clientY + offset});
    }

    const handleCardMouseLeave = () => {
        setDialogVisible(false);
    }

    return (
        <section
            className="p-10 flex flex-col gap-10 overflow-x-hidden items-center justify-center min-h-screen w-screen">

            <h2 className="text-5xl z-10 font-bold">Service Worker Lifecycle</h2>

            <motion.section
                variants={gridContainerVariants}
                initial="hidden"
                animate="show"
                className="flex flex-wrap gap-8 items-center justify-center max-w-screen-lg relative"
            >
                <AnimatedCard
                    title="Registrierung"
                    variants={gridSquareVariants}
                    headingAnimationProps={headingAnimationProps}
                    textAnimationProps={textAnimationProps}
                    onMouseEnter={() => handleCardMouseEnter(
                        <>
                            <h3 className="font-bold">Registrierung</h3>
                            <pre className="code-container">
                                {`navigator.serviceWorker.register('/service-worker.js')
  .then(function(registration) {
    console.log('Service Worker registration successful with scope: ', registration.scope);
  })
  .catch(function(error) {
    console.log('Service Worker registration failed: ', error);
  });`}
                            </pre>
                        </>
                    )}
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={handleCardMouseLeave}
                >
                    <div className="flex flex-col items-center gap-4">
                        <IoEnter className="text-3xl text-accent"/>
                        <div className="text-center">
                            <p>Der Service Worker wird im Browser registriert, um aktiviert und verwendet zu werden.</p>
                        </div>
                    </div>
                </AnimatedCard>

                <AnimatedCard
                    title="Installation"
                    variants={gridSquareVariants}
                    headingAnimationProps={headingAnimationProps}
                    textAnimationProps={textAnimationProps}
                    onMouseEnter={() => handleCardMouseEnter(
                        <>
                            <h3 className="font-bold">Installation</h3>
                            <pre className="code-container">
                            {`self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/index.html',
        '/styles.css',
        '/script.js',
        '/image.png'
      ]);
    })
  );
});`}
                        </pre>
                        </>
                    )}
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={handleCardMouseLeave}
                >
                    <div className="flex flex-col items-center gap-4">
                        <MdInstallDesktop className="text-3xl text-accent"/>
                        <div className="text-center">
                            <p>Der Service Worker lädt und speichert Ressourcen im Cache, um offline verfügbar zu
                                sein.</p>
                        </div>
                    </div>
                </AnimatedCard>

                <AnimatedCard
                    title="Aktivierung"
                    variants={gridSquareVariants}
                    headingAnimationProps={headingAnimationProps}
                    textAnimationProps={textAnimationProps}
                    onMouseEnter={() => handleCardMouseEnter(
                        <>
                            <h3 className="font-bold">Aktivierung</h3>
                            <pre className="code-container">
                                {`self.addEventListener('activate', event => {
  var cacheWhitelist = ['v2'];
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(keyList.map(key => {
        if (cacheWhitelist.indexOf(key) === -1) {
          return caches.delete(key);
        }
      }));
    })
  );
});`}
                            </pre>

                        </>
                    )}
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={handleCardMouseLeave}
                >
                    <div className="flex flex-col items-center gap-4">
                        <MdRocketLaunch className="text-3xl text-accent"/>
                        <div className="text-center">
                            <p>Der Service Worker wird aktiv und übernimmt die Kontrolle über die Webanwendung, um den
                                Cache
                                zu verwalten.</p>
                        </div>
                    </div>
                </AnimatedCard>
                {dialogVisible && (
                    <Dialog
                        x={dialogPosition.x}
                        y={dialogPosition.y}
                        content={dialogContent}
                        className="relative z-10"
                    />
                )}
            </motion.section>
        </section>
    );
};

export default LifecycleSquares;
