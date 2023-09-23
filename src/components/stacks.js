import React, { useState, useEffect } from 'react';
import './index.scss';
import { motion } from "framer-motion";
import VisibilitySensor from 'react-visibility-sensor';

function Stacks({ className, animate, duration, delay, name }) {
    const [animationCycle, setAnimationCycle] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAnimationCycle((prevCycle) => prevCycle + 1);
        }, 10000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <VisibilitySensor onChange={(visible) => setIsVisible(visible)}>
            <motion.div
                className={className}
                initial={{ y: 0, opacity: 0 }}
                animate={{
                    y: isVisible ? animate : 0,
                    opacity: isVisible ? 1 : 0,
                }}
                exit={{
                    y: animate,
                    opacity: 0,
                }}
                transition={{
                    duration: duration,
                    ease: "easeOut",
                    delay: isVisible ? delay : 0,
                }}
                key={animationCycle}
            >
                {name}
            </motion.div>
        </VisibilitySensor>
    );
}

export default Stacks;