

const AboutRes = ({icon,tag,about}) => {
  return (
    <div className="container">
        <div className="icon">
        <span>{icon}</span>
        </div>
        <h2>{tag}</h2>
        <p>{about} </p>
      
    </div>
  )
}

export default AboutRes
