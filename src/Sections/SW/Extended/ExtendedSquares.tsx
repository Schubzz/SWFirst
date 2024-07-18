import { motion } from "framer-motion";
import { IoSyncCircle, IoNotificationsOutline } from "react-icons/io5";
import { MdUpdate, MdRefresh } from "react-icons/md";
import AnimatedCard from '../../../Components/SquareCardSection/AnimatedCard';

const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
        }
    }
}

const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}

const headingAnimationProps = {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, ease: "easeOut" }
}

const ExtendedSquares: React.FC = () => {
    return (
        <section
            className="bg-black bg-opacity-85 p-10 flex flex-col gap-10 overflow-x-hidden items-center justify-center min-h-screen w-screen">

            <h2 className="text-5xl z-10 font-bold text-center">Erweiterte Service Worker Konzepte</h2>

            <motion.section
                variants={gridContainerVariants}
                initial="hidden"
                animate="show"
                className="flex flex-wrap gap-8 items-center justify-center max-w-screen-lg relative"
            >
                <AnimatedCard
                    title="Hintergrund Synchronisation"
                    variants={gridSquareVariants}
                    headingAnimationProps={headingAnimationProps}
                >
                    <div className="flex flex-col items-center gap-4">
                        <IoSyncCircle className="text-3xl text-accent" />
                    </div>
                </AnimatedCard>

                <AnimatedCard
                    title="Push-Message"
                    variants={gridSquareVariants}
                    headingAnimationProps={headingAnimationProps}
                >
                    <div className="flex flex-col items-center gap-4">
                        <IoNotificationsOutline className="text-3xl text-accent" />
                    </div>
                </AnimatedCard>

                <AnimatedCard
                    title="Periodische Hintergrund Synchronisation"
                    variants={gridSquareVariants}
                    headingAnimationProps={headingAnimationProps}
                >
                    <div className="flex flex-col items-center gap-4">
                        <MdUpdate className="text-3xl text-accent" />
                    </div>
                </AnimatedCard>

                <AnimatedCard
                    title="Update-Handling"
                    variants={gridSquareVariants}
                    headingAnimationProps={headingAnimationProps}
                >
                    <div className="flex flex-col items-center gap-4">
                        <MdRefresh className="text-3xl text-accent" />
                    </div>
                </AnimatedCard>
            </motion.section>
        </section>
    );
};

export default ExtendedSquares;
