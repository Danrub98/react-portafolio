import React from 'react';
import Photo from '../styles/images/fotoPerfil.png'

import Leadership from '../styles/images/lider.jpg'
import Research from '../styles/images/research.png'


import '../styles/stylesheet-reset.css';
import '../styles/stylesheet.css';


export default function Home() {
  return (
<div>

<section className="section2">
    <h2> Welcome to my Portafolio!</h2>
    
    <img className="foto" src={Photo} alt="A picture of myself"/> 

</section>

<section id="main-skills" className="skillsSection">
    <hr className= "hr"/>
    <h2>My Main Skills</h2>
    <article className="skill-row">
        <img className="skill" src={Leadership} alt="Imagen de Habilidades"/> 
        <h3 className="liderazgo">Leadership</h3>
        <p className="liderazgo">I had worked in different projects that required the managment of teams. One academic
            project was being the team leader at the MootComp,
            and in the professional side, I worked with managers to help them adquire skills in negotiation,
            leadership and team managment.</p>
    </article>
    <article className="skill-row">
        <img className="research" src={Research} alt="Investigación"/> 
        <h3>Research</h3>
        <p>I like learning new skills, I believe that the future is aimed in the technologies and in the TechLaw
            implementations.</p>
    </article>
</section>
</div>
  );
}