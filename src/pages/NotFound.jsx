import { Link } from 'react-router-dom';
import { Home, MoveLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/common/SEO';

const NotFound = () => {
    return (
        <>
            <SEO
                title="Page Not Found"
                description="The page you are looking for does not exist."
            />
            <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-brand-primary">
                {/* Background Decor */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-bold text-white/5 select-none"
                    >
                        404
                    </motion.div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                </div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 text-center px-4"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-8xl md:text-9xl font-bold text-brand-secondary mb-4 drop-shadow-2xl"
                    >
                        404
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-2xl md:text-4xl font-semibold text-white mb-6"
                    >
                        Page Not Found
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="max-w-md mx-auto text-gray-300 text-lg mb-10 leading-relaxed"
                    >
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <button
                            onClick={() => window.history.back()}
                            className="px-8 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors duration-300 flex items-center gap-2 group"
                        >
                            <MoveLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span>Go Back</span>
                        </button>

                        <Link
                            to="/"
                            className="px-8 py-3 rounded-lg bg-brand-secondary text-brand-primary font-bold hover:bg-white transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl shadow-brand-secondary/20"
                        >
                            <Home className="w-5 h-5" />
                            <span>Back Home</span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
};

export default NotFound;
