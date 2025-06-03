import { motion } from 'framer-motion';

import { ParallaxBanner } from 'react-scroll-parallax';
import backgroundImage from 'src/assets/images/background-img.jpeg';

const ParallaxBannerSection = () => {
    return <ParallaxBanner
        className="h-full snap-start bg-red-100"
        layers={[
            {
                image: backgroundImage,
                speed: -20,
            },
        ]}
    >
        <motion.div
            className="relative h-full flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <div className="flex flex-col items-center text-center text-shadow-lg">
                <h1 className="text-green-700 text-6xl">Eishi (Casey) Takahashi</h1>
                <div className="text-white text-2xl font-bold">
                    <h2>Engineering Science (Robotics Option) at the University of Toronto</h2>
                    <h2>Seeking PEY Co-op/Intern Opportunities 2025-2026</h2>
                </div>
            </div>
        </motion.div>
    </ParallaxBanner>;
}

export default ParallaxBannerSection;