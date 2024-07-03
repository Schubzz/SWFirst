import {useState} from 'react';
import {motion} from "framer-motion";
import AnimatedCard from "../../Components/SquareCardSection/AnimatedCard.tsx";
import Dialog from "../../Components/SquareCardSection/Dialog.tsx";
import '../../App.css';

import {VscGitFetch} from "react-icons/vsc";
import {MdOutlineNotificationsActive, MdOutlineUpdate} from "react-icons/md";

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

const ActionsSquares: React.FC = () => {
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
            <h2 className="text-5xl z-10 font-bold">Service Worker Actions</h2>

            <motion.section
                variants={gridContainerVariants}
                initial="hidden"
                animate="show"
                className="flex flex-wrap gap-8 items-center justify-center max-w-screen-lg relative"
            >
                <AnimatedCard
                    title="Fetch"
                    variants={gridSquareVariants}
                    headingAnimationProps={headingAnimationProps}
                    textAnimationProps={textAnimationProps}
                    onMouseEnter={() => handleCardMouseEnter(
                        <>
                            <h3 className="font-bold">Fetch-Ereignis</h3>
                            <pre className="code-container">
                                {`self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
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
                        <VscGitFetch className="text-3xl text-accent" />
                        <div className="text-center">
                            <p>Der Service Worker fängt Netzwerkanfragen ab und liefert Ressourcen aus dem Cache oder
                                Netzwerk.</p>
                        </div>
                    </div>
                </AnimatedCard>

                <AnimatedCard
                    title="Push"
                    variants={gridSquareVariants}
                    headingAnimationProps={headingAnimationProps}
                    textAnimationProps={textAnimationProps}
                    onMouseEnter={() => handleCardMouseEnter(
                        <>
                            <h3 className="font-bold">Push</h3>
                            <pre className="code-container">
                                {`self.addEventListener('push', event => {
  const data = event.data.json();
  const options = {
    body: data.body,
    icon: 'icon.png',
    badge: 'badge.png'
  };
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});`}
                            </pre>
                        </>
                    )}
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={handleCardMouseLeave}
                >
                    <div className="flex flex-col justify-center items-center gap-4">
                        <MdOutlineNotificationsActive className="text-3xl text-accent" />
                        <div className="text-center">
                            <p>Der Service Worker empfängt Push-Benachrichtigungen und zeigt sie dem Benutzer an.</p>
                        </div>
                    </div>
                </AnimatedCard>

                <AnimatedCard
                    title="Update"
                    variants={gridSquareVariants}
                    headingAnimationProps={headingAnimationProps}
                    textAnimationProps={textAnimationProps}
                    onMouseEnter={() => handleCardMouseEnter(
                        <>
                            <h3 className="font-bold">Update</h3>
                            <pre className="code-container">
                                {`self.addEventListener('updatefound', () => {
  const installingWorker = self.installing;
  installingWorker.onstatechange = () => {
    if (installingWorker.state === 'installed') {
      if (navigator.serviceWorker.controller) {
        console.log('New content is available; please refresh.');
      } else {
        console.log('Content is cached for offline use.');
      }
    }
  };
});`}
                            </pre>
                        </>
                    )}
                    onMouseMove={handleCardMouseMove}
                    onMouseLeave={handleCardMouseLeave}
                >
                    <div className="flex flex-col justify-center items-center gap-4">
                        <MdOutlineUpdate className="text-3xl text-accent" />
                        <div className="text-center">
                            <p>Der Service Worker prüft regelmäßig auf Updates und installiert neue Versionen, wenn
                                verfügbar.</p>
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

export default ActionsSquares;
