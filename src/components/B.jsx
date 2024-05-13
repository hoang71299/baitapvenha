import React from 'react'

function B(props) {
  const obj = props.obj
  return (
    <div>
      <p>{obj.id}</p>
      <p>{obj.name}</p>
      <p>{obj.username}</p>
      <p>{obj.address.street}</p>
      <p>{obj.address.suite}</p>
      <p>{obj.phone}</p>
      <p>{obj.website}</p>
      <p>{obj.company.name}</p>
      <p>{obj.catchPhrase}</p>
    </div>
  )
}

export default B