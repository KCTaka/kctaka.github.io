import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import type { CardData } from 'src/types/CardData';
import project_details from 'src/data/project_cards.json';
import project_categories_detials from 'src/data/project_catagories.json';
import Card from 'src/shared/Card'; // Import the Card component


const categoryCardData: CardData[] = project_categories_detials.map((card, index: number) => ({
    id: `cat-${index + 1}`, // Unique ID
    title: card.title,
    description: card.description,
    github_link: null,
    demo_link: null,
    categories: card.categories,
}));

const projectCardData: CardData[] = project_details.map((card, index: number) => ({
    id: `proj-${index + 1}`, // Unique ID
    title: card.title,
    description: card.description,
    github_link: card.github_link,
    demo_link: card.demo_link,
    categories: card.categories,
    featured: card.featured, // Added featured
}));


function getProjectCards(category: string): CardData[] {
    return projectCardData.filter(card => card.categories && card.categories.includes(category));
}

const animationMs = 500;

const CardGridSection: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category); // Simplified
    };

    const handleBackClick = () => {
        setSelectedCategory(null); // Simplified
    };

    const cardsToShow = selectedCategory ? getProjectCards(selectedCategory) : categoryCardData

    return (
        <section className="h-full snap-start bg-indigo-100 pt-16 px-4 sm:px-6 lg:px-8 flex flex-col">
            <div className="container mx-auto flex flex-col flex-grow min-h-0">
                <div className="text-center">
                    <h1 className="text-gray-900">
                        My Unique Projects
                    </h1>
                    <h2 className="text-indigo-700">
                        Some are in working progress
                    </h2>

                </div>
                <div className="relative h-full justify-center items-center overflow-y-auto">
                    <AnimatePresence>
                        {selectedCategory && (
                            <motion.button
                                key="back-button"
                                className="sticky top-3 z-10 bg-white rounded-xl mx-10 px-5 py-2 shadow text-sm text-gray-500 hover:text-gray-700"
                                onClick={handleBackClick}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: (animationMs / 1000) * 0.6 }} // e.g. 0.3s
                            >
                                Back
                            </motion.button>
                        )}
                    </AnimatePresence>


                    <div className="absolute grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-grow p-10">
                        <AnimatePresence mode="wait">
                            {cardsToShow.map((card, index) => (
                                <motion.div
                                    key={card.id} // Ensure this key is unique and stable
                                    className="
                                        group
                                        transform transition-all duration-300 ease-in-out
                                        hover:scale-105 hover:shadow-2xl
                                        h-full 
                                    "
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20, transition: { duration: (animationMs / 1000) / 2 } }} // e.g. 0.25s
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ duration: animationMs / 1000, delay: index * 0.05 }} // Adjusted delay
                                    onClick={() => {
                                        // Only allow category selection if no category is currently selected
                                        if (!selectedCategory && card.categories && card.categories.length > 0) {
                                            handleCategoryClick(card.categories[0]);
                                        }
                                    }}
                                >
                                    <Card card={card} className="flex flex-col justify-between h-full" />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardGridSection;
