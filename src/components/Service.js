import SingleService from "./SingleService"
import service from '../utils/secvice'

const Service = () => {
  return (
    <div className="service">
      <h1 className="animate__animated animate__rubberBand">What Do We Offer</h1>
        <div className="hero"> 
        {
            service.map((obj,index)=>{
                
                return <SingleService key={index} {...obj}  />
            })
        }
        </div>
      
    </div>
  )
}

export default Service
