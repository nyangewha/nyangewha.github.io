import React from 'react';
import { FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 -z-10 opacity-30 dark:opacity-20">
                <div className="w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
            </div>
            <div className="absolute bottom-0 left-0 -z-10 opacity-30 dark:opacity-20">
                <div className="w-72 h-72 bg-primary rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Available for Research Collaboration
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
                                Prof. <br />
                                <span className="text-gradient">DaeHun Nyang</span>
                            </h1>
                            <h2 className="text-2xl lg:text-3xl font-medium text-muted-foreground">
                                CIO of Ewha Womans Univ.
                            </h2>
                        </div>

                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Leading research in <span className="text-foreground font-semibold">Resource-Efficient AI Systems</span> and <span className="text-foreground font-semibold">Security & Privacy</span> of Networked Systems. Director of the Information Security Research Lab (ISRL).
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all hover:-translate-y-1"
                            >
                                Join Our Lab <FaArrowRight className="ml-2" />
                            </a>
                            <a
                                href="http://seclab.ewha.ac.kr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full glass dark:glass-dark text-foreground font-bold text-lg hover:bg-accent/50 transition-all hover:-translate-y-1 border border-border"
                            >
                                Lab Website <FaExternalLinkAlt className="ml-2 text-sm" />
                            </a>
                        </div>
                    </div>

                    {/* Image/Visual Content */}
                    <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in-up delay-200">
                        <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 mix-blend-overlay z-10 transition-opacity opacity-0 group-hover:opacity-100" />
                            <img
                                src="/nyangportrait.jpg"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.onerror = null;
                                    target.parentElement!.innerHTML = '<div class="flex flex-col items-center justify-center h-full bg-muted text-muted-foreground p-8 text-center"><span>Image not found</span><span class="text-xs mt-2">Ensure nyangportrait.jpg is in public/</span></div>';
                                }}
                                alt="Professor DaeHun Nyang"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Floating Card 1 */}
                            <div className="absolute bottom-8 left-8 right-8 glass p-4 rounded-xl z-20 transform transition-transform duration-500 hover:scale-105">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                        ISRL
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">Info. Security Research Lab</p>
                                        <p className="text-white/70 text-xs">Ewha Womans University</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl animate-pulse" />
                        <div className="absolute bottom-10 -left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-300" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
