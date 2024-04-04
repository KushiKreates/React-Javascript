import React from 'react';
import Header from './components/Header';
import AboutMe from './components/About';
import ProjectCard from './components/ProjectCard';
import KushiCodeEngine from './components/KushiCodeEngine';
import Footer from './components/Footer'; // Import the Footer component
import './App.css';

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <AboutMe />
        <div id="projects" className="project-cards-container">
          <ProjectCard
            title="Zumi.js"
            description="All purpose Discord Bot written in Node.js. Made for performance ❌ No pay walls Everything is free at zero cost ;D "
            imgPath="/ZUMI.png"
            ghLink=""
            demoLink="#Kushicode:404"
          />
          <ProjectCard
            title="Bedwars stats, skin, and more Api"
            description="A Api that gives Pixel perfect Skins, Bedwars stats, Rendering Engine all online on the web! and free. Check the prject on Github"
            imgPath="/ALL_MODES.png"
            ghLink="https://github.com/KushiKreates/Image-gen-api/"
            demoLink="http://de-free-01.hosts.optikservers.com:30861/bw/Kushi_k/yearly/ALL_MODES?q=yes"
          />
          <ProjectCard
            title="Minecraft Plugins"
            description="Cheap $ Minecraft plugins with 1 month free backup and maintainece."
            imgPath="https://th.bing.com/th/id/OIP.xJrytBgOb7t8VEaC6EM5-gHaEc?rs=1&pid=ImgDetMain"
            ghLink=""
            demoLink="#Kushicode:Paid"
          />
          {/* Add more ProjectCard components for additional projects */}
        </div>
        
      </main>
      <Footer /> {/* Include the Footer component */}
    </div>
  );
}
