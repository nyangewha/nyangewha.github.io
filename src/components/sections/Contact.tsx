import React from 'react';
import { FaEnvelope, FaVideo, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="animate-fade-in-up">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h2>
                        <p className="mb-10 text-primary-foreground/80 text-lg leading-relaxed">
                            <strong>Information Security Research Lab (ISRL)</strong><br />
                            We are always looking for talented individuals to join our team. If you are interested in research, industry-academia collaboration, or graduate studies, please don't hesitate to contact us.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                                    <FaEnvelope className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm text-primary-foreground/60 uppercase tracking-wider font-semibold">Email</p>
                                    <span className="text-lg font-medium">nyang@ewha.ac.kr</span>
                                </div>
                            </div>

                            <a
                                href="https://ewha.zoom.us/my/nyang"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors group"
                            >
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                                    <FaVideo className="text-xl" />
                                </div>
                                <div className="flex-grow">
                                    <p className="text-sm text-primary-foreground/60 uppercase tracking-wider font-semibold">Zoom Meeting</p>
                                    <span className="text-lg font-medium group-hover:underline">ewha.zoom.us/my/nyang</span>
                                </div>
                                <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />
                            </a>

                            <div className="flex items-start p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-5 flex-shrink-0">
                                    <FaMapMarkerAlt className="text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm text-primary-foreground/60 uppercase tracking-wider font-semibold">Location</p>
                                    <span className="text-lg font-medium block">
                                        52, Ewhayeodae-gil, Seodaemun-gu, Seoul<br />
                                        Dept. of Cyber Security, Ewha Womans University
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 shadow-2xl animate-fade-in-up delay-200">
                        <h3 className="text-2xl font-bold mb-6">Join ISRL</h3>
                        <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                            ISRL is actively recruiting passionate MS/PhD students and undergraduate interns interested in <strong>Resource-Efficient AI Systems</strong> and <strong>AI Security & Privacy</strong>.
                        </p>
                        <div className="space-y-4">
                            <a
                                href="mailto:nyang@ewha.ac.kr"
                                className="block w-full text-center bg-white text-primary font-bold py-4 rounded-xl hover:bg-white/90 transition shadow-lg transform hover:-translate-y-1"
                            >
                                Apply Now
                            </a>
                            <a
                                href="http://seclab.ewha.ac.kr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center border-2 border-white/30 text-white font-bold py-4 rounded-xl hover:bg-white/10 transition"
                            >
                                Visit Lab Website
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
