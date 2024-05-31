import { useState } from "react";
import "./header.css";
import List from "./list";
export default function Header({ data, setData }) {
  let num = 0;
  const [disstate, setdis] = useState(["none"]);
  console.log(data, "bura data");
  {
    data.forEach((item) => {
      num += item.price * item.num;
    });
  }

  return (
    <>
      {" "}
      <div className="header">
        <p>{num} $</p>
        <button
          onClick={() => {
            console.log(disstate);
            if (disstate[0] === "none") {
              setdis(["block"]);
            } else {
              setdis(["none"]);
            }
          }}
        >
          ^
        </button>
        <ul style={{ display: disstate }}>
          {data.map((item, index) => {
            // console.log(item)
            return (
              <List
                name={item.name}
                price={item.price}
                num2={item.num}
                data={data}
                setData={setData}
                key={index}
                index={index}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}
