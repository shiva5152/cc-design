

const SingleService = ({heading,about,src,bgcolor}) => {
  let col='black';
  if(bgcolor==='#000000'){
    col='white'
  }
  return (
    <div className="container" style={{backgroundColor: `${bgcolor}`,color:`${col}`}}>
        <h1>{heading}</h1>
        <h2>{about}</h2>
        <div className="img-container">
            <img src={src} alt={src} />
            <div className="overlay"></div>
        </div>
    </div>
  )
}

export default SingleService
