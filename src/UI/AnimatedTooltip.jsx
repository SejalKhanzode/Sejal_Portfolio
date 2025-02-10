"use client"
import { useState } from "react";
import {
    motion,
    useTransform,
    AnimatePresence,
    useMotionValue,
    useSpring,
} from "framer-motion";
import skills from "../data/SkillsData"

const AnimatedTooltip = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const springConfig = { stiffness: 100, damping: 5 };
    const x = useMotionValue(0);

    const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
    const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

    const handleMouseMove = (event) => {
        const halfWidth = event.currentTarget.offsetWidth / 2;
        x.set(event.nativeEvent.offsetX - halfWidth);
    };

    return (
        <div className="w-full flex flex-wrap gap-4 ">
            {skills.map((item) => (
                <div
                    key={item.id}
                    className="relative group z-[50] transition-transform duration-500 hover:scale-105 lg:px-12"
                    onMouseEnter={() => setHoveredIndex(item.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence mode="wait">
                        {hoveredIndex === item.id && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: { type: "spring", stiffness: 260, damping: 10 },
                                }}
                                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                style={{ translateX, rotate }}
                                className="absolute -top-20 -left-1/2 translate-x-1/2 flex flex-col items-center justify-center rounded-md bg-black shadow-xl px-6 py-2 text-white "
                            >
                                <div className="font-bold text-md">{item.name}</div>
                                <div className="text-sm">{item.designation}</div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <img
                        onMouseMove={handleMouseMove}
                        src={item.image}
                        alt={item.name}
                        className="rounded-full border-2 h-[80px] w-[80px]  border-white shadow-md object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            ))}
        </div>
    );
};

export default AnimatedTooltip;
