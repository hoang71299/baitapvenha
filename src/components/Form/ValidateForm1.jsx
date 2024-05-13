import { useState } from "react"

function ValidateForm1() {
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")

  const [errorEmail, setErrorEmail]  = useState("")
  const [errorPass, setErrorPass]  = useState("")

  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }
  const handlePass = (e)=>{
    setPass(e.target.value)
  }
  const handleForm=(e)=>{
    e.preventDefault();
    if(email === ""){
      setErrorEmail("Vui lòng nhập email")
    }
    if(pass === ""){
      setErrorPass("Vui lòng nhập pass")
    }
  }
  return (
    <form action="" onSubmit={handleForm}>
      <input type="text" value={email} onChange={handleEmail}/>
      <p>{errorEmail}</p>
      <input type="text" value={pass}  onChange={handlePass}/>
      <p>{errorPass}</p>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ValidateForm1