import { useState } from "react";
import RenderError from "./RenderError";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ValidateForm2(props) {
  const [inputs, setInputs] = useState({
    email: "",
    pass: "",
  });
  const [errors, setErrors] = useState({});
  
  const handleInput = (e) => {
    const nameInput = e.target.name;
    const value = e.target.value;
    console.log(nameInput, value);
    setInputs((prevState) => ({
      ...prevState,
      [nameInput]: value
    }));
  };
  console.log(inputs);
  const handleForm = (e) => {
    e.preventDefault();


    let errorSubmit = {};
    let flag = true;

    if (inputs.email === "") {
      flag = false;
      errorSubmit.email = "Vui lòng nhập lại email";
    }else{
      errorSubmit.email =""
    }

    if (inputs.pass === "") {
      flag = false;
      errorSubmit.pass = "Vui lòng nhập lại pass";
    }else{
      errorSubmit.pass =""
    }
    setErrors(errorSubmit)

    if (flag) {
      toast.success("thành công")
    } 
    
  };
  
  return (
    <>
      <RenderError errors={errors}/>
      <form action="" onSubmit={handleForm}>
        <input type="text" name="email" value={inputs.email} onChange={handleInput} />
        <input type="password" name="pass" value={inputs.pass} onChange={handleInput} />
        <button  type="submit">Submit</button>
      </form>
      <ToastContainer/>
    </>
  );
}

export default ValidateForm2;
