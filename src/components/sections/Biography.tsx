import React from 'react';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Biography: React.FC = () => {
    return (
        <section id="biography" className="py-24 bg-muted/30 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Biography</h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Education */}
                    <div className="animate-fade-in-up delay-100">
                        <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
                            <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4 text-primary">
                                <FaGraduationCap />
                            </span>
                            Education
                        </h3>
                        <div className="space-y-8 relative pl-8 border-l-2 border-border">
                            <div className="relative">
                                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-primary bg-background"></span>
                                <h4 className="text-lg font-bold text-foreground">Ph.D. in Computer Science</h4>
                                <p className="text-primary font-medium">Yonsei University, Korea</p>
                                <span className="text-sm text-muted-foreground">2000</span>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-primary bg-background"></span>
                                <h4 className="text-lg font-bold text-foreground">M.S. in Computer Science</h4>
                                <p className="text-primary font-medium">Yonsei University, Korea</p>
                                <span className="text-sm text-muted-foreground">1996</span>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-primary bg-background"></span>
                                <h4 className="text-lg font-bold text-foreground">B.Eng. in Electronic Eng. & CS</h4>
                                <p className="text-primary font-medium">KAIST, Korea</p>
                                <span className="text-sm text-muted-foreground">1994</span>
                                <p className="text-xs text-muted-foreground mt-1">Double Major</p>
                            </div>
                        </div>
                    </div>

                    {/* Professional Experience */}
                    <div className="animate-fade-in-up delay-200">
                        <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
                            <span className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mr-4 text-blue-500">
                                <FaBriefcase />
                            </span>
                            Experience
                        </h3>
                        <div className="space-y-8 relative pl-8 border-l-2 border-border">
                            <div className="relative">
                                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-blue-500 bg-background"></span>
                                <h4 className="text-lg font-bold text-foreground">Chief Information Officer (CIO)</h4>
                                <p className="text-muted-foreground">Office of Information Technology, Ewha Womans University</p>
                                <span className="text-sm text-primary font-medium">Feb 2025 - Present</span>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-blue-500 bg-background"></span>
                                <h4 className="text-lg font-bold text-foreground">Professor</h4>
                                <p className="text-muted-foreground">Cyber Security Dept., College of AI, Ewha Womans University</p>
                                <span className="text-sm text-muted-foreground">2020 - Present</span>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-muted-foreground bg-background"></span>
                                <h4 className="text-lg font-bold text-foreground">Professor</h4>
                                <p className="text-muted-foreground">Computer Science & Engineering, Inha University</p>
                                <span className="text-sm text-muted-foreground">2003 - 2020</span>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-muted-foreground bg-background"></span>
                                <h4 className="text-lg font-bold text-foreground">Founding Director</h4>
                                <p className="text-muted-foreground">Information Security Research Laboratory (ISRL)</p>
                                <span className="text-sm text-muted-foreground">2003 - Present</span>
                            </div>
                            <div className="relative">
                                <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-muted-foreground bg-background"></span>
                                <h4 className="text-lg font-bold text-foreground">Senior Researcher</h4>
                                <p className="text-muted-foreground">Electronics and Telecommunications Research Institute (ETRI)</p>
                                <span className="text-sm text-muted-foreground">2000 - 2003</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Biography;
