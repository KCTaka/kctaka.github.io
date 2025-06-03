import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
];

export const Header = () => {
    const { pathname } = useLocation();

    return (
        <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
            <motion.div className="text-xl font-bold"
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
            >KC</motion.div>
            <motion.nav
                className="flex space-x-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {navLinks.map(({ name, path }) => (
                    <Link
                        key={name}
                        to={path}
                        className={clsx(
                            'text-gray-700 hover:text-black transition-colors',
                            pathname === path && 'font-semibold underline'
                        )}
                    >
                        {name}
                    </Link>
                ))}
            </motion.nav>
        </header>
    );
};
