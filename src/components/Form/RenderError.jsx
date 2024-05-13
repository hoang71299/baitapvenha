
function RenderError(props) {
  
  let errors = props.errors
  console.log(errors);
  function RenderError (){
    if(Object.keys(errors).length > 0){
      return Object.keys(errors).map((key,index)=>{
        return (
          errors[key] && <li key={index}>{errors[key]}</li>
        )
      })
    }
  }
  return (
    <>
      {RenderError()}
    </>
  )
}

export default RenderError