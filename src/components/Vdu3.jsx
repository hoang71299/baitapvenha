import React from 'react'

function Vdu3(props) {
  function renderDataObj(props){
  let {obj}= props;
    
    if(Object.keys(obj).length > 0){
      return Object.keys(obj).map((key,index)=>{
        return (
          <li key={key}>
            {obj[key]}
          </li>
        )
      })
    }
  }
  return (
    <div>
      <p>Map theo obj</p>
      <ul>
        {renderDataObj()}
      </ul>
    </div>
  )
}

export default Vdu3