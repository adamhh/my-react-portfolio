import React, {useEffect, useState} from 'react';
import './portfolio.css'
import GridItem from './components/GridItem';
import ComChat from './resources/androidSS.jpg';
import Sparetoolz from './resources/sparetoolz.jpg';
import Bella from './resources/bellaSS.jpg';
import DD from './resources/DarkDespairSS.jpg';
import Jumper from './resources/jumperSS.jpg';
import Hacker from './resources/hacker.jpg';

export default function Portfolio() {
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
      const handleScroll = () => {
          const current = window.scrollY;
          setScrollPosition(current);
      }
      window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  useEffect(() => {
      if (!showPortfolio && scrollPosition > 1250) {
        setShowPortfolio(true)
    }
  }, [scrollPosition]);
  return (
      <section id="portfolio">
        {showPortfolio && (
          <>
            <h2>My Favorite Work</h2>
            <div className="work-grid">
              <GridItem
                name={"Sparetoolz"}
                description={"iOS App"}
                isGithubLink={false}
                link={"https://apps.apple.com/nz/app/sparetoolz/id1399594640"}
                imagePath={Sparetoolz}
              />
              <GridItem
                name={"ComChat"}
                description={"Native Android App"}
                isGithubLink={true}
                link={"https://github.com/adamhh/450Group8"}
                imagePath={ComChat}
              />
              <GridItem
                name={"Bella Privata"}
                description={"React Website"}
                isGithubLink={false}
                link={"https://www.bellaprivata.com"}
                imagePath={Bella}
              />
              <GridItem
                name={"Dark Despair"}
                description={"Javascript Game"}
                isGithubLink={true}
                link={"https://github.com/adamhh/DarkDespairGame/"}
                imagePath={DD}
              />
              <GridItem
                name={"GameDev"}
                description={"Javascript Game"}
                isGithubLink={true}
                link={"https://github.com/larryj6029/GameDev"}
                imagePath={Jumper}
              />

            </div>
          </>
        )}

      </section>
    );

}
