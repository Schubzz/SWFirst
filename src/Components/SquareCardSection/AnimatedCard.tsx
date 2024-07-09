import React from 'react';
import {motion} from 'framer-motion';

interface AnimatedCardProps {
    title: string;
    variants: any;
    headingAnimationProps: any;
    children?: React.ReactNode;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
                                                       title,
                                                       variants,
                                                       headingAnimationProps,
                                                
                                                       children
                                                   }) => {
    return (
            <motion.div
                variants={variants}
                className="backdrop-blur-sm shadow-2xl p-4 w-[18rem] max-w-[20rem] min-w-[18rem] aspect-square rounded-lg justify-center flex items-center transition-transform duration-300 hover:scale-105 border border-[#e9fffa] hover:border-[#1FFFC9] hover:border-4 text-center"
            >
                <div className="flex flex-col gap-4 items-center">
                    <motion.h3
                        className="font-bold text-3xl text-wrap "
                        {...headingAnimationProps}
                    >
                        {title}
                    </motion.h3>

                    <div className="content">
                        {children}
                    </div>
                </div>
            </motion.div>
    );
};

export default AnimatedCard;
