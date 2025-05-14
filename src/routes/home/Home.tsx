import { useEffect, useRef, useState } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import ParallaxBannerSection from 'src/routes/home/sections/ParallaxBannerSection';
import CarouselSection from 'src/routes/home/sections/CarouselSection';
import CardGridSection from 'src/routes/home/sections/CardGridSection';

function Home() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [scrollElement, setScrollElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setScrollElement(scrollRef.current);
    }, []);

    return (
        <div className="flex-1 overflow-y-scroll snap-y snap-mandatory" ref={scrollRef}>
            <ParallaxProvider scrollContainer={scrollElement ?? undefined}>
                <ParallaxBannerSection />
                <CarouselSection />
                <CardGridSection />
                {/* <div className="h-full snap-start bg-blue-100 flex items-center justify-center">
                        <h1 className="text-4xl text-grey">Section 3</h1>
                    </div> */}
            </ParallaxProvider>
        </div>
    );
}

export default Home;