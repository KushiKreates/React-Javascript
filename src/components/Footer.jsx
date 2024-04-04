import React, { useState, useEffect } from 'react';
import './footer.css';

function Footer() {
  const [leaderboardData, setLeaderboardData] = useState(null);

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  const fetchLeaderboardData = async () => {
    try {
      const response = await fetch('https://stats.pika-network.net/api/profile/Kushi_k/leaderboard?type=bedwars&interval=yearly&mode=ALL_MODES');
      const data = await response.json();
      setLeaderboardData(data);
    } catch (error) {
      console.error('Error fetching leaderboard data:', error);
    }
  };

  return (
    <footer className="footer">
      <h2>Bedwars Stats</h2>
      {leaderboardData && (
        <div className="leaderboard">
          {Object.entries(leaderboardData).map(([stat, info]) => (
            <div key={stat} className="stat">
              <p>{stat}</p>
              <p>{info.entries[0].value}</p>
            </div>
          ))}
        </div>
      )}
    </footer>
  );
}

export default Footer;
