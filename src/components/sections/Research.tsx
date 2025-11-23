import React from 'react';
import { FaServer, FaRobot, FaNetworkWired, FaKey } from 'react-icons/fa';

const Research: React.FC = () => {
    const areas = [
        {
            icon: <FaServer />,
            title: "Resource-Efficient AI Systems",
            items: ["Vector DB & LSM Tree Optimization", "Compact Tensor Representation", "AI/ML Engineering", "Approximate Computing & Fast Hash Tables"],
            color: "text-green-500",
            bg: "bg-green-500/10",
            border: "border-green-500"
        },
        {
            icon: <FaRobot />,
            title: "AI Security & Privacy",
            items: ["Differential Privacy for AI", "Adversarial Examples Detection", "Source/Binary Code Analysis", "Deep Learning-based Fuzzy Key Extractor"],
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            border: "border-blue-500"
        },
        {
            icon: <FaNetworkWired />,
            title: "Network Security",
            items: ["In-Network Security (INS) (P4 Routers)", "Encrypted Traffic Analysis (TOR/TLS)", "DDoS Defense & Approximate Counting", "Network Measurement & Profiling"],
            color: "text-purple-500",
            bg: "bg-purple-500/10",
            border: "border-purple-500"
        },
        {
            icon: <FaKey />,
            title: "System & Crypto",
            items: ["Blockchain & Digital Signature", "Zero-Knowledge Proof (ZKIP)", "Usable Security", "Ransomware/Malware Detection"],
            color: "text-orange-500",
            bg: "bg-orange-500/10",
            border: "border-orange-500"
        }
    ];

    return (
        <section id="research" className="py-24 bg-muted/30 relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Research Focus</h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-muted-foreground text-lg">
                        Focusing on <strong className="text-foreground">Approximate Computing</strong> and <strong className="text-foreground">Resource-Efficient AI Systems</strong>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {areas.map((area, index) => (
                        <div
                            key={index}
                            className={`bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 ${area.border} animate-fade-in-up group`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex items-center mb-6">
                                <div className={`w-12 h-12 ${area.bg} rounded-xl flex items-center justify-center ${area.color} mr-4 text-2xl transition-transform group-hover:rotate-6`}>
                                    {area.icon}
                                </div>
                                <h3 className="text-xl font-bold text-foreground">{area.title}</h3>
                            </div>
                            <ul className="space-y-3">
                                {area.items.map((item, i) => (
                                    <li key={i} className="flex items-start text-muted-foreground text-sm">
                                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${area.bg.replace('/10', '')} mr-3 flex-shrink-0`} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
