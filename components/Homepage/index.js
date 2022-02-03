import React from 'react';
import Hero from "./Hero"
import Cta from './Cta';
import Story from "./Story"
import World from "./World"
import Warrior from "./Warrior"
import Roadmap from "./Roadmap"
import Rarity from "./Rarity"
import Team from "./Team"
import FAQ from "./FAQ"
function Homepage(props) {
  return <div>
    <Hero props={props}/>
    <Cta props={props}/>
    <Story props={props}/>
    <World props={props}/>
    <Warrior props={props}/>
    <Roadmap props={props}/>
    <Rarity props={props}/>
    <Team props={props}/>
    <FAQ props={props}/>
  </div>;
}

export default Homepage;
