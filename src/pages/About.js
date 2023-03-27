import aboutData from "../utils/about"
import { AboutRes } from "../components"
const About = () => {
  return (
    <div className="about">
      <div className="about-container">
      <h2><span>About</span> Us</h2>
      <p>Creative Concept Design is the Designing & Fabrication
                firm based in delhi which deals in Design & Fabrication of
                an Exhibition Stand, Trade Shows & Events.
                We have Team of Highly Experienced
                professionals, Commited to provide
                attractive Design, high quality fabrication,
                Production, Construction and Installation
                Services at competitive prices.
      </p>
      </div>
      <div className="question-container">
      <h2>Why should you choose Creative Concept Design ?</h2>
      <div className="reasons">
        {aboutData.map((obj,index)=>{
          return <AboutRes key={index} {...obj} />
        })}
      </div>
      </div> 
    </div>
  )
}
export default About