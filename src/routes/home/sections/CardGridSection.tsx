import React from 'react';
import { motion } from 'framer-motion';

interface GridCardData {
    id: number;
    title: string;
    description: string;
    imageUrl?: string; // Optional image for the card
}

const sampleGridCards: GridCardData[] = [
    {
        id: 1,
        title: 'Autonomous TurtleBot Localization',
        description: 'Implemented LiDAR-based localization using Kalman/Bayesian filters in ROS, achieving ±2cm positional accuracy in simulated environments.'
    },
    {
        id: 2,
        title: 'Reinforcement Learning Snake AI',
        description: 'Developed a Deep Q-Network (DQN) and PPO agent in PyGame, achieving a 90% win rate through hyperparameter optimization and policy tuning.'
    },
    {
        id: 3,
        title: 'DCGAN Face Generation',
        description: 'Trained a distributed DCGAN model on 4 GPUs to generate 128x128 facial images with 85% perceptual similarity using PyTorch and NumPy.'
    },
    {
        id: 4,
        title: 'Soil Nutrition Sensor System',
        description: 'Designed a wireless sensor network with Arduino/RPi Pico, integrating pH, moisture, and temperature sensors using LoRa communication protocols.'
    },
    {
        id: 5,
        title: 'Poker Card Dispenser Automation',
        description: 'Built an ESP32-based system with ultrasonic sensors and servo/stepper motors to automate card dispensing with real-time player detection.'
    },
    {
        id: 6,
        title: 'Kalman/Particle Filter for Virtual Car',
        description: 'Simulated a PyGame car environment and implemented Kalman/particle filters to estimate position with NumPy-based mathematical modeling.'
    },
    {
        id: 7,
        title: 'Cartoon Frame Interpolation',
        description: 'Engineered a PyTorch-based generative model to interpolate discrete cartoon frames, improving animation fluidity via distributed training.'
    },
    {
        id: 8,
        title: 'LiDAR-Enhanced TurtleBot Navigation',
        description: 'Optimized TurtleBot path planning using ROS and LiDAR data, integrating sensor fusion for obstacle avoidance in dynamic environments.'
    },
    {
        id: 9,
        title: 'InstaPersona LLM Behavior Prediction',
        description: 'Fine-tuned LLaMA-3.1b to predict Instagram user behavior using sentiment analysis and interaction data, deployed via a React.js UI.'
    },
    {
        id: 10,
        title: 'Embedded Systems for Formula Racing',
        description: 'Collaborated on UofT Formula Racing Team’s embedded systems for real-time vehicle telemetry and control using C++ and Arduino.'
    },
];

const CardGridSection: React.FC = () => {
    return (
        <section className="h-full snap-start bg-indigo-100 py-16 px-4 sm:px-6 lg:px-8 flex flex-col">
            <div className="container mx-auto flex flex-col flex-grow min-h-0">
                <div className="text-center mb-12 flex-shrink-0">
                    <h2 className="header1 text-gray-900">
                        My Unique Projects
                    </h2>
                    <p className="subtitle1 text-indigo-700">
                        Some are in working progress
                    </p>
                </div>

                {/* Grid Container */}
                {/* Adjust grid-cols-3 for different column counts on different screen sizes if needed */}
                {/* e.g., sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-auto flex-grow">
                    {sampleGridCards.map((card, index) => (
                        // Card Item - using 'group' for hover effects on children
                        <motion.div
                            key={card.id}
                            className="
                group bg-white rounded-xl shadow-lg overflow-hidden
                transform transition-all duration-300 ease-in-out
                hover:scale-105 hover:shadow-2xl
                min-h-56 flex flex-col justify-between // Added min-h-56 and flex utilities for content alignment
              "
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of the card is visible, allow re-animation
                            transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger animation slightly
                        >
                            {/* Optional Image
              {card.imageUrl && (
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              )}
              */}

                            {/* Card Content */}
                            <div className="p-6">
                                <h3 className="card-header"
                                // To make text scale with the card, you might need to adjust font size on hover,
                                // or if the parent scale is enough, this might not be needed.
                                // For true proportional text scaling, you might need JavaScript or more complex CSS.
                                // Tailwind's scale transform on the parent `group` scales the entire element including text.
                                >
                                    {card.title}
                                </h3>
                                <p className="card-disc"
                                // Text will naturally scale because its parent is scaling.
                                // If you want independent font size change on hover, add group-hover:text-base etc.
                                >
                                    {card.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CardGridSection;
