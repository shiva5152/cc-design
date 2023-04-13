import { Carousel,Gallary,LogoSlider } from "../components"
import{BiCloudDownload} from 'react-icons/bi'
import {motion} from 'framer-motion'

import { slideIn, textVariant } from "../utils/motion"


const Home = ({data}) => {
  return (
    <div>
       <Carousel />
       <div className="welcome">
       <motion.div variants={textVariant()} initial={"hidden"} whileInView="show" className="welcome">
            <h1><span className="sp1">Welcome to</span> <span className="sp2"> Creative Concept Design</span></h1>
            <p>Creative Concept Design is the Designing & Fabrication
                firm based in delhi which deals in Design & Fabrication of
                an Exhibition Stand, Trade Shows & Events.
                We have Team of Highly Experienced
                professionals, Commited to provide
                attractive Design, high quality fabrication,
                Production, Construction and Installation
                Services at competitive prices. Our aim to
                deliver a cost effective design service &
                turn key solution in the Exhibition & Event
                Sector. Our OFFER make us a unique &
                undeniable, unbeatable one stop solutions.
            </p>
           </motion.div>
           <motion.div variants={slideIn("right","spring",0,1.25)} initial={"hidden"} whileInView={"show"}>
           <div className="list">
            <h2> What We Do</h2>
            <ul>
              <li>Exhibition Stand Design</li>
              <li>Graphic Design</li>
              <li>Interior & Landscaping Design</li>
              <li>Event & Stage Design</li>
              <li>Exhibition Hanger Turnkey Project</li>
            </ul>
           </div>
            <div className="mission">
              <h2>Mission</h2>
              <p>To maintain leadership through honest and transparent practices by providing world-class services to our customers; to develop their businesses worldwide through exhibitions, conferences, trade missions, market-entry strategies, etc.</p>
            </div>  
            <div className="vision">
              <h2>Vision</h2>
              <p>To play an integral role in growth of your bussines, maintain leadership as a trade promotion organisation, and to set standards in excellence.</p>
            
            </div>
           </motion.div>
            </div>
       <div className="downlodpro">
        <h2>Downlod our Profile</h2>
        <a href="cc_design_profile.pdf" download={"cc_design_profile.pdf"} className={"downloadbtn"}><div className="sp1">Downlod</div> <div className="sp2"><BiCloudDownload /></div></a>
       </div>
       {/* <Reviews data={data}/> */}
       
       <Gallary/>
       <LogoSlider />


    </div>
  )
}
export default Home