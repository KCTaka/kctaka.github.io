import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    delay?: number;
}

const Section: React.FC<SectionProps> = ({ title, children, delay = 0.2 }) => (
    <motion.section
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay }}
    >
        <h2 className="text-3xl font-bold text-indigo-700 mb-4 pb-2 border-b-2 border-indigo-200">{title}</h2>
        <div className="text-lg text-gray-800 leading-relaxed space-y-4">
            {children}
        </div>
    </motion.section>
);

export default Section;