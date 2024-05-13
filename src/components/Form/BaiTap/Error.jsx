
const Error = (props) => {
  const errors = props.errors
  const renderError =()=>{
    if(Object.keys(errors).length > 0){
      return Object.keys(errors).map((key,index)=>(
        <p className="text-danger"  key={index}>{errors[key]}</p>
      ))
    }
  }
  
  return (
    <>
      {renderError()}
    </>
  )
}

export default Error