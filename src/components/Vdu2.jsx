function Vdu2(props) {
  let { arr } = props;
  console.log(arr);
  function renderData() {
    if (arr.length > 0) {
      return arr.map((value, key) => {
        return <li key={key}>{value}</li>;
      });
    }
  }
  return (
    <div>
      <p>MAP theo ARRAY</p>
      <ul>
        {renderData()}
      </ul>
    </div>
  );
}

export default Vdu2;
