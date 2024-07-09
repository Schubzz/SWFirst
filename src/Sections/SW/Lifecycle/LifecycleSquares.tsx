import {motion} from "framer-motion";
import {IoEnter} from "react-icons/io5";
import {MdInstallDesktop, MdRocketLaunch} from "react-icons/md";
import AnimatedCard from '../../../Components/SquareCardSection/AnimatedCard';


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

const LifecycleSquares: React.FC = () => {
   

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
            </motion.section>
        </section>
    );
};

export default LifecycleSquares;
