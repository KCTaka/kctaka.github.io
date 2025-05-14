import { Swiper, SwiperSlide } from 'swiper/react';
// Updated Swiper modules import
import { Autoplay, Keyboard, Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'; // Added for coverflow effect

// Data and interface for MyCarousel
interface CardData {
    id: number;
    title: string;
    content: string;
}

const cardData: CardData[] = [
    { id: 1, title: 'Cartoon Frame Interpolation', content: 'Uses PyTorch Lightning, Weight and Biases, and Multi-GPU training to generate frames in-between existing cartoon frames.' },
    { id: 2, title: 'DQN Snake', content: 'Uses Reinforcement Learning (Deep Q-Network) to play the game of Snake' },
    { id: 3, title: 'Kalman and Particle Filtering', content: 'Uses Kalman and Particle Filtering techniques for state estimation and tracking' },
    { id: 4, title: 'Robotic Card Dealer', content: 'Uses a robotic mechanism to deal cards in a game of poker' },
    { id: 5, title: 'InstaPersona', content: 'Uses a generative model to imitate human personality from social media context' },
];

// MyCarousel component definition
const CarouselSection: React.FC = () => {
    return (
        <section className="h-full snap-start bg-green-100 py-12 relative flex flex-col">
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
                                <div
                                    className={`
                  w-64 h-80 bg-white rounded-xl shadow-lg p-6
                  transition-all duration-300 ease-in-out
                  ${isActive ? 'opacity-100 scale-100' : 'opacity-60 scale-90'}
                `}
                                >
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{card.title}</h2>
                                    <p className="text-gray-600">{card.content}</p>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="swiper-custom-progressbar" />
            </div>
            <div className="flex-1 flex items-center justify-center">
                <h1 className="header1">Featured Projects</h1>
            </div>
        </section >
    );
};

export default CarouselSection;