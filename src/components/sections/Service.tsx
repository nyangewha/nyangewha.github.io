import React from 'react';
import { FaBookReader, FaEdit, FaUsersCog } from 'react-icons/fa';

const Service: React.FC = () => {
    const services = [
        {
            icon: <FaBookReader />,
            title: "Editor-in-Chief (EiC)",
            description: "KIISC Journal (2021 - 2024)",
            color: "text-primary",
            bg: "bg-primary/10",
            border: "hover:border-primary/50"
        },
        {
            icon: <FaEdit />,
            title: "Section Editor",
            description: "ETRI Journal (Information Security Section)",
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            border: "hover:border-blue-500/50"
        },
        {
            icon: <FaUsersCog />,
            title: "Executive Director",
            description: "Korean Institute of Information Security and Cryptology (KIISC)",
            color: "text-purple-500",
            bg: "bg-purple-500/10",
            border: "hover:border-purple-500/50"
        }
    ];

    return (
        <section id="service" className="py-24 bg-background relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Professional Services</h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up delay-100">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`bg-card p-8 rounded-2xl border border-border ${service.border} transition-all duration-300 hover:-translate-y-2 hover:shadow-lg text-center group`}
                        >
                            <div className={`w-16 h-16 mx-auto rounded-2xl ${service.bg} ${service.color} flex items-center justify-center text-3xl mb-6 transition-transform group-hover:scale-110`}>
                                {service.icon}
                            </div>
                            <h4 className="font-bold text-xl mb-3 text-foreground">{service.title}</h4>
                            <p className="text-muted-foreground font-medium">{service.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center animate-fade-in-up delay-200">
                    <p className="text-muted-foreground font-medium mb-4">Active Memberships</p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {['IEEE', 'ACM', 'KIISC'].map((org) => (
                            <span key={org} className="inline-flex items-center px-6 py-2 rounded-full bg-muted text-foreground font-bold hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                                {org}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
