import { useState } from "react";

function Form() {
  const [getItem, setItem] = useState("");
  const [err1, setErr1] = useState("");
  const [getItem2,setItem2]= useState("")
  const [err2,setErr2] = useState("")
  const [getErea,setErea]= useState("")
  const [err3,setErr3] = useState("")
  const [getSelect,setSelect] = useState("")
  const [err4,setErr4] = useState("")

  const handleInput1 = (e) => {
    setItem(e.target.value);
  };
  const handleInput2=(e)=>{
    setItem2(e.target.value)
    
  }
  const handleTextArea =(e)=>{
    setErea(e.target.value)
  }
  const handleSelect=(e)=>{
    setSelect(e.target.value)
  }
  console.log(getSelect);
  const handleForm = (e) => {
    e.preventDefault();
    let x = 1;
    if (getItem === "") {
      setErr1("Vui lòng nhập lại");
      x = 2;
    } else {
      setErr1("");
    }
    if (getItem2 === "") {
      setErr2("Vui lòng nhập lại");
      x = 2;
    } else {
      setErr2("");
    }

    if(getErea === ""){
      setErr3("Vui lòng nhập lại")
      x=2;
    }else{
      setErr3("")
    }


    if(getSelect == ""){
      setErr4("nhập input vào")
      x=2;
    }else{
      setSelect("")
    }

    if (x === 1) {
      alert("Đăng nhập thành công");
    }
  };

  return (
    <>
      <h1>Xử lý form</h1>
      <form action="" onSubmit={handleForm}>
        <input type="text" value={getItem} onChange={handleInput1} />
        <p>{err1}</p>
        <input type="text" value={getItem2} onChange={handleInput2} />
        <p>{err2}</p>
        <textarea onChange={handleTextArea}>{getErea}</textarea>
        <p>{err3}</p>
        <select value={getSelect} onChange={handleSelect}>
          <option value="">vui lòng chọn</option>
          <option value="1">female</option>
          <option value="2">male</option>
        </select>
        <p>{err4}</p>
        <label htmlFor="">is going</label>
        <input type="checkbox" name="isGoing" />
        <button type="submit">Click</button>
      </form>
    </>
  );
}

export default Form;
