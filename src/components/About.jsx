// components/AboutMe.jsx
import React from 'react';
import './About.css'; // Import your CSS file for styling

export default function AboutMe() {
  return (
    <section className="middle-section">
      <div className="spacingbig"></div> {/* Spacer */}
      <div className="content">
        <div className="text-group">
          <h1 className="big-text">Hi!, Im a Werid Developer 🥰</h1>
          <h1 className="rgb-text">The Simple Developer 👨‍💻 </h1>
          <div className="spacing"></div> {/* Spacer */}
          

          <p className="sub-text">
            Im an Active Developer, I 💙 to code and I love to learn new things. 
            Plus I code Minecraft plugins Sometimes 🧊, I'm also a minecraft bedwars player at heart.
            Meet me @ <a href="https://pika-network.net/">Pika-network</a> or on Hypixel. Minecraft username Kushi_k 💖
            Don't forget to follow me on Twitter 🐦 and GitHub 🐙 for more updates!
            Also, catch me streaming live on Twitch 📺 and YouTube 🎥 every week!
          </p>
          <a href="https://www.youtube.com/channel/UC0NEUBogT98IReGm0TXuKUw" target="_blank" rel="noopener noreferrer">
            <button type="button" className="cool-button">Youtube 💻</button>
          </a>
          <a href="<Hire now>" target="_blank" rel="noopener noreferrer">
            <button type="button" className="cool2-button">👨‍💻 Hire Me Now!</button>
          </a>
        </div>
      </div>
      
      <div className="spacing"></div> {/* Spacer */}
      <h1 className="rgb-text">Projects👨‍💻 </h1>
    </section>
  );
}
