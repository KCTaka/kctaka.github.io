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
            <div className="flex flex-col items-center text-shadow-lg"> {/* New div to group header and subtitle */}
                <h1 className="header1 text-green-700 text-6xl">Eishi (Casey) Takahashi</h1>
                <div className="subtitle1 text-green-200 text-2xl font-bold">
                    <p>Engineering Science (Robotics Option) at the University of Toronto</p>
                    <p>Seeking PEY Co-op/Intern Opportunities 2025-2026</p>
                </div>
            </div>
        </div>
    </ParallaxBanner>;
}

export default ParallaxBannerSection;