import React from 'react';
import Hero from "./Hero"
import Cta from './Cta';
import Story from "./Story"
import World from "./World"
import Warrior from "./Warrior"
import Roadmap from "./Roadmap"
import Rarity from "./Rarity"
import Team from "./Team"
function Homepage() {
  return <div>
    <Hero />
    <Cta />
    <Story />
    <World />
    <Warrior />
    <Roadmap />
    <Rarity />
    <Team/>
  </div>;
}

export default Homepage;
