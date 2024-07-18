import { motion } from "framer-motion";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdNetworkWifi, MdSync, MdAutorenew } from "react-icons/md";
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

const CachingSquares: React.FC = () => {
    return (
        <section
            className="bg-black bg-opacity-85 p-10 flex flex-col gap-10 overflow-x-hidden items-center justify-center min-h-screen w-screen">

            <h2 className="text-5xl z-10 font-bold">Caching-Strategien</h2>

            <motion.section
                variants={gridContainerVariants}
                initial="hidden"
                animate="show"
                className="flex flex-wrap gap-8 items-center justify-center max-w-screen-lg relative"
            >
                <AnimatedCard
                    title="Cache First"
                    variants={gridSquareVariants}
                    headingAnimationProps={headingAnimationProps}
                >
                    <div className="flex flex-col items-center gap-4">
                        <IoCloudDownloadOutline className="text-3xl text-accent" />              
                    </div>
                </AnimatedCard>

                <AnimatedCard
                    title="Network First"
                    variants={gridSquareVariants}
                    headingAnimationProps={headingAnimationProps}
                >
                    <div className="flex flex-col items-center gap-4">
                        <MdNetworkWifi className="text-3xl text-accent" />
                    </div>
                </AnimatedCard>

                <AnimatedCard
                    title="Stale-While-Revalidate"
                    variants={gridSquareVariants}
                    headingAnimationProps={headingAnimationProps}
                >
                    <div className="flex flex-col items-center gap-4">
                        <MdSync className="text-3xl text-accent" />
                    </div>
                </AnimatedCard>

                <AnimatedCard
                    title="Dynamisches Caching"
                    variants={gridSquareVariants}
                    headingAnimationProps={headingAnimationProps}
                >
                    <div className="flex flex-col items-center gap-4">
                        <MdAutorenew className="text-3xl text-accent" />
                    </div>
                </AnimatedCard>
            </motion.section>
        </section>
    );
};

export default CachingSquares;
