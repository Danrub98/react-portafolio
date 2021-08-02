import React from 'react';
import Photo from '../styles/images/fotoPerfil.png'




import '../styles/stylesheet-reset.css';
import '../styles/stylesheet.css';


export default function Home() {
  return (
<div>

<section className="section2">
    <h2> Welcome to my Portafolio!</h2>
    
    <img className="foto" src={Photo} alt="A picture of myself"/> 

</section>



</div>
  );
}