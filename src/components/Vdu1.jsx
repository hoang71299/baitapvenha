
function Vdu1(props) {
  const xx = props.xx
  const listItem = xx.map((value)=>
    <li key={value.toString()}>
      {value}
    </li>
  )
  return (
    <ul>
      {listItem}
    </ul>
  )
}

export default Vdu1