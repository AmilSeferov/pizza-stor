import "./card.css";
export default function Card({ data, setData, img, name, info, price }) {
  const handlewrite = () => {
    let item = data.find((item) => {
      return item.name === name;
    });
    let i = data.indexOf(item);
    let num = 1;
    if (!item) {
      setData([...data, { name, price, num }]);
    } else {
      data[i].num += 1;
      setData([...data]);
      // console.log(data[i].num)
    }
  };
  return (
    <>
      <div className="containerCard">
        <img src={img} alt="" />
        <div className="text">
          <h2>{name}</h2>
          <p>{info}</p>
          <label htmlFor="">
            {price} $ <button onClick={handlewrite}>Order</button>
          </label>
        </div>
      </div>
    </>
  );
}
