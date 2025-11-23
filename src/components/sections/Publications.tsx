import React from 'react';
import { FaCertificate, FaMapMarkerAlt, FaLock, FaNetworkWired, FaShieldAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Publications: React.FC = () => {
    const papers = [
        {
            title: "SketchFeature: High-Quality Per-Flow Feature Extractor Towards Security-Aware Data Plane",
            authors: "Sian Kim, Seyed Mohammad Mehdi Mirnajafizadeh, Bara Kim, Rhongho Jang, DaeHun Nyang",
            venue: "NDSS 2025",
            location: "San Diego, USA",
            icon: <FaCertificate />,
            color: "text-blue-600",
            bg: "bg-blue-100 dark:bg-blue-900/30",
            border: "border-blue-600"
        },
        {
            title: "Enhancing Network Attack Detection with Distributed and In-Network Data Collection System",
            authors: "Seyed Mohammad Mehdi Mirnajafizadeh, Ashwin Raam Sethuram, David Mohaisen, DaeHun Nyang, Rhongho Jang",
            venue: "USENIX Security 2024",
            location: "Philadelphia, USA",
            icon: <FaShieldAlt />,
            color: "text-indigo-600",
            bg: "bg-indigo-100 dark:bg-indigo-900/30",
            border: "border-indigo-600"
        },
        {
            title: "A Robust Counting Sketch for Data Plane Intrusion Detection",
            authors: "Sian Kim, Changhun Jung, Rhongho Jang, David Mohaisen, DaeHun Nyang",
            venue: "NDSS 2023",
            location: "San Diego, USA",
            icon: <FaCertificate />,
            color: "text-blue-600",
            bg: "bg-blue-100 dark:bg-blue-900/30",
            border: "border-blue-600"
        },
        {
            title: "A Scalable and Dynamic ACL System for In-Network Defense",
            authors: "Changhun Jung, Sian Kim, Rhongho Jang, David Mohaisen, DaeHun Nyang",
            venue: "ACM CCS 2022",
            location: "Los Angeles, USA",
            icon: <FaLock />,
            color: "text-red-600",
            bg: "bg-red-100 dark:bg-red-900/30",
            border: "border-red-600"
        },
        {
            title: "SSD-assisted Ransomware Detection and Data Recovery Techniques",
            authors: "Sungha Baek, Youngdon Jung, David Mohaisen, Sungjin Lee, DaeHun Nyang",
            venue: "IEEE Trans. on Computers 2021",
            location: "Journal",
            icon: <FaNetworkWired />,
            color: "text-green-600",
            bg: "bg-green-100 dark:bg-green-900/30",
            border: "border-green-600"
        },
        {
            title: "SketchFlow: Per-Flow Systematic Sampling Using Sketch Saturation Event",
            authors: "RhongHo Jang, DaeHong Min, SeongKwang, Aziz Mohaisen, DaeHun Nyang",
            venue: "IEEE INFOCOM 2020",
            location: "Virtual Conference",
            icon: <FaNetworkWired />,
            color: "text-green-600",
            bg: "bg-green-100 dark:bg-green-900/30",
            border: "border-green-600"
        }
    ];

    return (
        <section id="publications" className="py-24 bg-background relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Selected Publications</h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
                        Extensive publication record in prestigious venues such as <span className="font-semibold text-primary">NDSS, USENIX Security, CCS, INFOCOM, ICDCS, PETS</span>, and top journals including <span className="italic font-medium">IEEE ToN, TMC, TPDS, TDSC, TIFS</span>.
                    </p>
                </div>

                <div className="space-y-6">
                    {papers.map((paper, index) => (
                        <div
                            key={index}
                            className={`group bg-card hover:bg-accent/5 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 ${paper.border} animate-fade-in-up`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                                <span className={`inline-flex items-center px-4 py-1.5 ${paper.bg} ${paper.color} rounded-full text-sm font-bold`}>
                                    <span className="mr-2">{paper.icon}</span> {paper.venue}
                                </span>
                                <span className="text-muted-foreground text-sm font-medium flex items-center">
                                    <FaMapMarkerAlt className="mr-2" /> {paper.location}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                                {paper.title}
                            </h3>

                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {paper.authors.split(', ').map((author, i, arr) => (
                                    <span key={i}>
                                        {author.includes('DaeHun Nyang') ? <strong className="text-foreground font-semibold">{author}</strong> : author}
                                        {i < arr.length - 1 ? ', ' : ''}
                                    </span>
                                ))}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="http://seclab.ewha.ac.kr/?sort=international-papers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 rounded-full border border-border text-primary font-bold hover:bg-primary hover:text-primary-foreground transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                    >
                        View Full Publication List <FaExternalLinkAlt className="ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Publications;
