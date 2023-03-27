
import './index.css'
const FromSubmit = ({
      isLoading,
      submitText,
      secondaryText,
      submitIcon,
      submitTextColor
}) => {
  return (
    <div className={!isLoading?'form-submit':'form-submit form-submit-action'}>
      <h2 style={{color:`${submitTextColor}`}}>{submitText} <span>{submitIcon}</span></h2>
      <p>{secondaryText}</p>

    </div>
  )
}


export default FromSubmit
