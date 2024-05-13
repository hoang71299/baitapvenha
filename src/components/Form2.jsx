import React, { useState } from 'react'

function Reservation() {
  const [isGoing,setIsGoing] = useState(false)
  const [guest,setGuest ] = useState(2);
  const renderList=(e)=>{
    if(e.target.type === "checkbox"){
      setIsGoing(e.target.checked)
    }else if(e.target.type ==='number'){
      setGuest(e.target.value)
    }
  }
  console.log(isGoing,guest);
  return (
    <form action="">
      <label htmlFor="">is going</label>
      <input checked={isGoing} type="checkbox" name="isGoing" onChange={renderList}  />
      <p></p>
      <label htmlFor="">is guest</label>
      <input value={guest} type="number" name="guest" onChange={renderList}/>
    </form>
  )
}

export default Reservation