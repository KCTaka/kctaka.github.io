import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import clsx from 'clsx';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
];

export const Header = () => {
    const { pathname } = useLocation();

    return (
        <motion.header
            className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="text-xl font-bold">KC</div>
            <nav className="flex space-x-4">
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
            </nav>
        </motion.header>
    );
};
