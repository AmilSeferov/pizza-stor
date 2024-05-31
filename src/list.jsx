import "./list.css";
export default function List({ name, price, num2, data, setData, index }) {
  const handleMinus = () => {
    if (data[index].num > 0) {
      data[index].num = data[index].num - 1;


      setData(()=>[...data]);
    } else if (data[index].num === 0) {
      console.log("jozef");

      // data = data.filter((item) => item.name !== name);
      setData((prev)=>prev.filter((item) => item.name !== name));
    }
  };
  const handlePlus = () => {};
  return (
    <>
      <li>
        <p>{name}</p>
        <div>
          <button onClick={handleMinus}>-</button>
          <p>
            {num2} x {price}$
          </p>

          <button onClick={() => {}}>+</button>
        </div>
      </li>
    </>
  );
}
