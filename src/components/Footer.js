import { useState,useEffect } from 'react'
import{FiPhoneCall} from 'react-icons/fi'
import{MdOutlineMailOutline} from 'react-icons/md'
import{FaRegAddressCard,FaFacebookSquare,FaWhatsapp} from 'react-icons/fa'

const Footer = () => {

  const [data,setData]=useState(null);

  useEffect(() => {
     fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      setData(data);
  });
  },[])
 
  return (
    <>
    <footer className="footer">
      <div className="intro">
          <h1>CC Design</h1>
          <p> Creative Concept Design is the Designing & Fabrication
                firm based in delhi which deals in Design & Fabrication of
                an Exhibition Stand, Trade Shows & Events.
          </p>
      </div>
      <div className="contact-now">
        <h1>Constact Now</h1>
        <span className="phone f-link">
        <FiPhoneCall className="icon"/> <p>Phone- </p><p>(+91) {data && data.phone1}</p>
        </span>
        <span className="email f-link"> <MdOutlineMailOutline className="icon"/> <p>Email-</p> <p>{data && data.emailId}</p></span>
        <div className="address f-link"><FaRegAddressCard className="icon"/> <p>Address</p><div>{data && data.address}</div></div>

      </div>
      <div className="social">
      <h1>Social Links</h1>
          <a href='https://www.facebook.com/Creative-concept-design-374343453037652' rel="noreferrer" target='_blank' className="facebook f-link"><FaFacebookSquare className="icon"/> <p>Facebook</p></a>
          <span className="wats f-link"><FaWhatsapp className="icon"/> <p>{data && data.phone1}</p></span>
          <span className="phone f-link">
        <FiPhoneCall className="icon"/> <p>Phone2-{data && data.phone2}</p>
        </span>
      </div>
      

    </footer>
    <div className="developer">
      <p>© Copyright 2023 CC Design | All Rights Reserved.</p>
      <a className="link" href='https://www.linkedin.com/in/shiva-gupta-671214214/' rel="noreferrer" target='_blank'>@ Developed By</a>
    </div></>
  )
}
export default Footer