import {motion} from "framer-motion";
import {VscGitFetch} from "react-icons/vsc";
import {MdOutlineNotificationsActive, MdOutlineUpdate} from "react-icons/md";
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

const ActionsSquares: React.FC = () => {
    
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
                >
                    <div className="flex flex-col justify-center items-center gap-4">
                        <MdOutlineUpdate className="text-3xl text-accent" />
                        <div className="text-center">
                            <p>Der Service Worker prüft regelmäßig auf Updates und installiert neue Versionen, wenn
                                verfügbar.</p>
                        </div>
                    </div>
                </AnimatedCard>
            </motion.section>
        </section>
    );
};

export default ActionsSquares;
