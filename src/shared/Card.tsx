import React from 'react';
import type { CardData } from 'src/types/CardData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Card: React.FC<{ card: CardData; className?: string }> = ({ card, className = '' }) => {
    return (
        <div className={`card ${className} flex flex-col justify-between`}> {/* Added flex utilities for layout */}
            <div> {/* Wrapper for main content */}
                <h1>{card.title}</h1>
                <p>{card.description}</p>
            </div>
            <div className="mt-4 flex space-x-2"> {/* Wrapper for buttons */}
                {card.github_link && (
                    <a
                        href={card.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        aria-label={`GitHub repository for ${card.title}`}
                    >
                        <FaGithub className="mr-2" />
                        GitHub
                    </a>
                )}
                {card.demo_link && (
                    <a
                        href={card.demo_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        aria-label={`Live demo for ${card.title}`}
                    >
                        <FaExternalLinkAlt className="mr-2" />
                        Demo
                    </a>
                )}
            </div>
        </div>
    );
};


export default Card;
