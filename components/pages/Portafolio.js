import Projects from "./Projects"
import Data from "./data.json"


export default function Portafolio() {
    return (
<section className="workprojects">
    <hr className= "hr"/>
    <h3 className="h3projects"> Projects Created</h3>
    <div className="projectcontainer">
       {
           Data.map( project => (
               <Projects title = {project.title} repo = {project.repo} link = {project.link} img = {project.img}/>
           )

           )
       } 

    </div>

        </section>

    )
}