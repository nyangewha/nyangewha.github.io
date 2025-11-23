import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300 font-sans">
            <Header />
            <main className="flex-grow relative">
                {/* Background gradient blob for visual interest */}
                <div className="absolute top-0 left-0 w-full h-96 bg-primary/5 -z-10 blur-3xl rounded-b-[50%]" />
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
