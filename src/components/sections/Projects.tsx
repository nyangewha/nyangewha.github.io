import React from 'react';
import { FaFlask, FaGraduationCap, FaStar, FaArrowRight } from 'react-icons/fa';

const Projects: React.FC = () => {
    const projects = [
        {
            icon: <FaFlask />,
            title: "Basic Research Lab (BRL)",
            description: "Selected for the NRF Basic Research Laboratory program to conduct intensive research on next-gen security.",
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            border: "group-hover:border-blue-500/50"
        },
        {
            icon: <FaGraduationCap />,
            title: "BK21 Four Program",
            description: "Participating in Brain Korea 21 Four, fostering world-class graduate students and research capabilities.",
            color: "text-purple-500",
            bg: "bg-purple-500/10",
            border: "group-hover:border-purple-500/50"
        },
        {
            icon: <FaStar />,
            title: "Mid-Career Researcher",
            description: "NRF Mid-Career Researcher Program grant for advanced security algorithms and system design.",
            color: "text-amber-500",
            bg: "bg-amber-500/10",
            border: "group-hover:border-amber-500/50"
        }
    ];

    return (
        <section id="projects" className="py-24 bg-muted/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Active Projects & Grants</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Supported by National Research Foundation of Korea (NRF)
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group relative bg-card hover:bg-card/80 p-8 rounded-2xl border border-border ${project.border} transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className={`w-16 h-16 rounded-2xl ${project.bg} ${project.color} flex items-center justify-center text-3xl mb-6 transition-transform group-hover:scale-110 duration-300`}>
                                {project.icon}
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed mb-6">
                                {project.description}
                            </p>

                            <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                                Learn more <FaArrowRight className="ml-2" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
