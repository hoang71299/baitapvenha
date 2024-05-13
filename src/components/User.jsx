import React from "react";

function User(props) {
  console.log(props);
  const arr = props.user;
  return (
    <>
      <ul>
        {arr.map((item)=>(
          <li key={item.id}>
            <p><b>name</b>  {item.name}</p>
            <p><b>username</b>  {item.username}</p>
            <p><b>email </b> {item.email}</p>
            <p><b>address-street</b> {item.address.street}</p>
            <p><b>address-suite</b> {item.address.suite}</p>
            <p><b>phone</b> {item.phone}</p>
            <p><b>website</b> {item.website}</p>
            <p><b>company-name</b> {item.company.name}</p>
            <p><b>catchPhrase</b> {item.company.catchPhrase}</p>
            <br />
          </li>
        ))}
      </ul>
    </>
  );
}

export default User;
