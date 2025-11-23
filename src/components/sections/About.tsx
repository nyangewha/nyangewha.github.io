import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About Professor Nyang</h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground leading-relaxed text-justify">
                    <p className="mb-6">
                        Dr. DaeHun Nyang is a distinguished researcher in cybersecurity and resource-efficient computing. He currently serves as a Professor in the <strong className="text-foreground">Cyber Security Department of the College of Artificial Intelligence</strong> at Ewha Womans University and as the <strong className="text-foreground">Chief Information Officer (CIO)</strong> of the university's Office of Information Technology. He is also the founding director of the Information Security Research Laboratory (ISRL).
                    </p>
                    <p className="mb-6">
                        His research philosophy bridges theoretical advancements with practical applications. Dr. Nyang's main research area is <strong className="text-foreground">approximate computing</strong>, with a current focus on <strong className="text-foreground">Resource-efficient AI systems</strong>, network measurement, counting algorithms, and LSM tree indexing. He is actively exploring <strong className="text-foreground">differential privacy for AI, AI/ML engineering, vector DBs, KV cache, and compact tensor representations</strong>. Additionally, his work extends to <strong className="text-foreground">In-Network Security (INS) powered by P4-programmable routers, encrypted traffic analysis (TOR/TLS)</strong>, Zero-Knowledge Proofs (ZKIP), digital signatures, and blockchain technology.
                    </p>
                    <p>
                        He holds a B.Eng. with a double major in Electronic Engineering and Computer Science from <strong className="text-foreground">KAIST</strong>, and M.S. and Ph.D. degrees in Computer Science from <strong className="text-foreground">Yonsei University</strong>. Prior to Ewha, he was a Senior Researcher at ETRI and a Professor at Inha University for 17 years. He is a member of IEEE, ACM, and KIISC, and has served as the Editor-in-Chief for the KIISC Journal.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
