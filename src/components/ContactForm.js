import React, { useState } from "react";
import SubmitForm from './FormSubmit'
import {MdOutlineError}  from "react-icons/md"
import {BsCheckCircleFill}  from "react-icons/bs"



const Form = ({number}) => {
  const [show, setter] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  
  const [Alert,setAlert]=useState({
    submitText:"",
    secondaryText:"",
    submitIcon:<></>,
    submitTextColor:"",
    isLoading:false
  });

  const [errors, setErrors] = useState({});

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

    const reset=()=>{
      setTimeout(() => {
        setter(curr=>!curr);
        setAlert({
          ...Alert,
          submitText:"bye",
          secondaryText:"",
          submitIcon:<></>,
          submitTextColor:"",
          [Alert.isLoading]:!Alert.isLoading
        });
        
      }, 3000);
      
          
      }
        
    
  const handleSubmit = event => {
    event.preventDefault();
    
    let formErrors = {};

    if (!formData.name) {
      formErrors.name = "*Name is required";
    }
    if (!formData.email) {
      formErrors.email = "*Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "*Email is not valid";
    }
    if (!formData.number) {
      formErrors.number = "*Number is required";
    }
    if (!formData.message) {
      formErrors.message = "*Message is required";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      
      setter(curr=>!curr);
      //Submit form data to server
      setFormData({name: "",
      email: "",
      number: "",
      message: ""
     })

     setAlert({
      ...Alert,[Alert.isLoading]:!Alert.isLoading
     })
    
    
    fetch('https://formspree.io/f/mdovare', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => {
          if(data.error){
            setAlert({
              ...Alert,
              submitText:"Something went wrong",
              secondaryText:`call us (+91) ${number}`,
              submitIcon:<MdOutlineError style={{color: "#FF033E",translate: "0 5px"}}/>,
              submitTextColor:"#FF033E",
              isLoading:true
            })
          }
          else{
            setAlert({
              ...Alert,
              submitText:"Form Submitted",
              secondaryText:"We will reach you soon.",
              submitIcon:<BsCheckCircleFill style={{color: "#05C896",translate: "0 5px"}}/>,
              submitTextColor:"#000000",
              isLoading:true
            })
          }
          reset();
          
         
        })
        .catch((error) => {
          console.log('error') 
        });
        
    }
    
    
  };

  return (
   <>
   <div className="form-contact">
    <h1>Contact Us</h1>
     <form  className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Orgnisation Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
        />
        <div className="invalid-feedback">{errors.name}</div>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
        />
        <div className="invalid-feedback">{errors.email}</div>
      </div>

      <div className="form-group">
        <label htmlFor="number">Phone Number</label>
        <input
          type="text"
          name="number"
          minLength={10}
          value={formData.number}
          onChange={handleChange}
          className={`form-control ${errors.number ? "is-invalid" : ""}`}
        />
        <div className="invalid-feedback">{errors.number}</div>
      </div>

      <div className="form-group">
        <label htmlFor="message">What do you want</label>
        <textarea
          rows="5"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`form-control ${errors.message ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.message}</div>
        </div> 
        <button type="submit" disabled={show} className="btn">
            {show===true?"Wait...":"Submit"}
        </button>
      </form> 
   </div>
   <SubmitForm {...Alert} />
    
    </>
  )
  }

  export default Form;

