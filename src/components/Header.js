import { useState } from "react";
import { NavLink } from "react-router-dom"
import links from '../utils/links'
import {FaBars,FaWindowClose,FaFacebookSquare} from 'react-icons/fa'


const Header = () => {
  const[openMenu,setMenu]=useState(false);
  const toggle=()=>{
    
    setMenu((prev)=>!prev)
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <img src='/images/logo.jpg' alt="creative concepts design" />
      </div>
      <div  onClick={toggle} className={ openMenu?"open":"links"}>
      <div className="toggle-bars"><FaWindowClose /></div>
      
        {links.map((link)=>{
          const {id,path,text}=link;
          return (
            <NavLink key={id} to={path} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{text}</NavLink>
          )
        })}
        <div className="f-container">
        <a href={"https://www.facebook.com/Creative-concept-design-374343453037652"} rel="noreferrer" target='_blank' className="facebook f-link"><FaFacebookSquare className="icon"/> <p>Facebook</p></a>
        </div>
        
      </div>
      <div className="toggle-bars" onClick={toggle}>
        <FaBars/>
        </div> 
    </nav>
  )
}

export default Header
