import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Biography from './components/sections/Biography';
import Service from './components/sections/Service';
import Projects from './components/sections/Projects';
import Research from './components/sections/Research';
import Publications from './components/sections/Publications';
import Contact from './components/sections/Contact';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Layout>
        <Hero />
        <About />
        <Biography />
        <Service />
        <Projects />
        <Research />
        <Publications />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
