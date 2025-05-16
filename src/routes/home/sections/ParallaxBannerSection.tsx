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
        <div className="relative h-full flex items-center justify-center">
            <div className="flex flex-col items-center text-center text-shadow-lg">
                <h1 className="text-green-700 text-6xl">Eishi (Casey) Takahashi</h1>
                <div className="text-white text-2xl font-bold">
                    <h2>Engineering Science (Robotics Option) at the University of Toronto</h2>
                    <h2>Seeking PEY Co-op/Intern Opportunities 2025-2026</h2>
                </div>
            </div>
        </div>
    </ParallaxBanner>;
}

export default ParallaxBannerSection;