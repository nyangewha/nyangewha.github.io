import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-muted/50 text-muted-foreground py-12 border-t border-border mt-auto">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-sm font-medium">&copy; 2025 DaeHun Nyang & ISRL. All Rights Reserved.</p>
                <p className="text-xs mt-3 text-muted-foreground/80">Department of Cyber Security, Ewha Womans University</p>
            </div>
        </footer>
    );
};

export default Footer;
