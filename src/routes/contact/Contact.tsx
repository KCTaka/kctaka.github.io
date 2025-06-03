import { motion } from 'framer-motion';
import { FaEnvelope, FaSchool, FaInstagram, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import JSX from 'react';

const contactInfo = {
    fullName: "Eishi (Casey) Takahashi",
    email: "kc.takahashi04@gmail.com",
    schoolEmail: "kc.takahashi@mail.utoronto.ca",
    instagram: "kctaka",
    github: "https://github.com/KCTaka",
    linkedin: "https://www.linkedin.com/in/kctaka",
    location: "Toronto ON, Canada & Vancouver, BC, Canada"
};

const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut"
        }
    })
};

const ContactItem = ({ icon, text, href, custom }: { icon: JSX.ReactElement, text: string, href?: string, custom: number }) => (
    <motion.div
        className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
        variants={listItemVariants}
        custom={custom}
        initial="hidden"
        animate="visible"
    >
        <span className="text-indigo-500 text-xl">{icon}</span>
        {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-indigo-600 transition-colors">
                {text}
            </a>
        ) : (
            <span className="text-gray-700">{text}</span>
        )}
    </motion.div>
);


const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="container mx-auto px-4 py-12"
        >
            <header className="text-center mb-12">
                <motion.h1
                    className="header1 text-indigo-600"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Get in Touch
                </motion.h1>
                <motion.p
                    className="subtitle1 text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    I'm always open for new opportunities and experience.
                </motion.p>
            </header>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="space-y-4">
                    <ContactItem custom={0} icon={<FaEnvelope />} text={contactInfo.email} href={`mailto:${contactInfo.email}`} />
                    <ContactItem custom={1} icon={<FaSchool />} text={contactInfo.schoolEmail} href={`mailto:${contactInfo.schoolEmail}`} />
                    <ContactItem custom={2} icon={<FaMapMarkerAlt />} text={contactInfo.location} />
                </div>

                <div className="space-y-4">
                    <ContactItem custom={3} icon={<FaGithub />} text="GitHub" href={contactInfo.github} />
                    <ContactItem custom={4} icon={<FaLinkedin />} text="LinkedIn" href={contactInfo.linkedin} />
                    <ContactItem custom={5} icon={<FaInstagram />} text={`Instagram: @${contactInfo.instagram}`} href={`https://instagram.com/${contactInfo.instagram}`} />
                </div>
            </div>

            <motion.div
                className="mt-16 text-center p-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-2xl font-semibold mb-3">Contact me!</h2>
                <p className="text-lg text-white mb-4">
                    Whether you have a question or just want to say hi, feel free to reach out.
                </p>
                <p className="text-sm text-white">
                    Looking forward to hearing from you.
                </p>
            </motion.div>

        </motion.div>
    );
};

export default Contact;