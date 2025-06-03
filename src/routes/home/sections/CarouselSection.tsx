import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
// Updated Swiper modules import
import { Autoplay, Keyboard, Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'; // Added for coverflow effect

import type { CardData } from 'src/types/CardData'; // Importing CardData type
import Card from 'src/shared/Card'; // Importing Card component
import project_details from 'src/data/project_cards.json'; // Importing project card details


const cardData: CardData[] = project_details.filter(card => card.featured).map((card, index: number) => ({
    id: index + 1,
    title: card.title,
    description: card.description,
    github_link: card.github_link,
    demo_link: card.demo_link,
}));

// MyCarousel component definition
const CarouselSection: React.FC = () => {
    return (
        <section className="h-full snap-start bg-green-100 py-12 relative flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-center">
                <h1>Featured Projects</h1>
                <h2 className="text-green-700">Showcasing the best projects</h2>
            </div>

            <div className="flex-[4]">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    coverflowEffect={{
                        rotate: 0, // Rotation for a flat look
                        stretch: 0, // Stretch space between slides
                        depth: 100, // Depth effect for side cards
                        modifier: 1, // Effect multiplier
                        slideShadows: false, // Disable default shadows
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        type: 'progressbar',
                        clickable: true,
                        el: '.swiper-custom-progressbar',
                    }}
                    navigation={true} // Enable default navigation arrows
                    keyboard={{ enabled: true }} // Enable keyboard navigation
                    modules={[EffectCoverflow, Keyboard, Pagination, Navigation, Autoplay]}
                    className="h-full w-full"
                    onSlideChange={() => {
                        // You can add custom logic here if needed when the slide changes
                    }}
                >
                    {cardData.map((card) => (
                        <SwiperSlide key={card.id} className="!flex items-center justify-center">
                            {({ isActive }) => (
                                <Card
                                    card={card}
                                    className={`
                                    card w-80 h-80
                                    transition-all duration-300 ease-in-out
                                    ${isActive ? 'opacity-100 scale-100' : 'opacity-60 scale-90'}
                                    `}
                                />
                            )}
                        </SwiperSlide>
                    ))}

                </Swiper>
                <div className="swiper-custom-progressbar" />
            </div>
        </section >
    );
};

export default CarouselSection;