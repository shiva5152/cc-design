import { ContactForm} from "../components"
import{ useState,useEffect } from "react";
import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import{FiPhoneCall} from 'react-icons/fi'
import{MdOutlineMailOutline,MdShareLocation} from 'react-icons/md';
import {FaRegAddressCard,FaMobileAlt} from 'react-icons/fa';



const Contact = () => {
  const [data,setData]=useState(null);

  useEffect(() => {
     fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      setData(data);
      
  });
  },[])
  // console.log(arr);
  return (
    <div>
      <ContactForm number={data && data.phone1}/>
      <div className="reachUs">
      <div className="contact-now">
        <h1>Reach Us</h1>
        <span className="phone f-link">
        <FiPhoneCall className="icon"/> <p>Phone- </p><p>(+91) {data && data.phone1}</p>
        </span>
        <span className="email f-link"> <MdOutlineMailOutline className="icon"/> <p>Email-</p> <p>{data && data.emailId}</p></span>
        <span className="phone f-link">
        <FaMobileAlt className="icon"/> <p>Alternate No.-</p><p>(+91) {data && data.phone1}</p>
        </span>
        <div className="address f-link"><FaRegAddressCard className="icon"/> <p>Address</p><span style={{display:"block"}} >{data && data.address}</span></div>
        <div className="coord f-link" ><MdShareLocation className="icon"/> <p>Map Coordinates- <span>{data && data.location}</span></p> </div>

      </div>
      
      
      {/* {console.log(data && data.location.split(',').map((x)=>Number(x)))} */}
      <div className="map">
      <MapContainer center={[28.7240787,77.0883089]} zoom={13} scrollWheelZoom={false} className="map-container">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[28.7240787,77.0883089]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      </div>
      </div>
    </div>
  )
}
export default Contact