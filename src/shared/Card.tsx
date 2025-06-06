import React from 'react';
import { useNavigate } from 'react-router-dom';


import type { CardData } from 'src/types/CardData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Card: React.FC<{ card: CardData; className?: string }> = ({ card, className = '' }) => {
    const navigate = useNavigate();
    const isClickable = !!card.page_link; // True if page_link 

    const handleCardClick = () => {
        if (card.page_link) {
            if (card.page_link.startsWith('http')) {
                // If it's an external link, open in a new tab
                window.open(card.page_link, '_blank', 'noopener,noreferrer');
            } else {
                navigate(card.page_link);
            }
        }
    };

    const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        // Stop the click event from bubbling up to the parent div (the card)
        event.stopPropagation();
        // The default behavior of the anchor tag (opening the link) will still occur
    };


    return (
        <div
            className={`card ${className} flex flex-col justify-between ${isClickable ? 'group cursor-pointer' : ''}`}
            onClick={handleCardClick}
        >
            <div>
                <h1 className={`${isClickable ? 'group-hover:text-green-700 transition-colors duration-300' : ''}`}>{card.title}</h1>
                <p>{card.description}</p>
            </div>
            <div className="mt-4 flex space-x-2">
                {card.github_link && (
                    <a
                        href={card.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                        aria-label={`GitHub repository for ${card.title}`}
                        onClick={handleLinkClick}
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
                        onClick={handleLinkClick}
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
