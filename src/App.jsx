import { useEffect, useState } from "react";
import "./App.css";
import Card from "./card";
import Header from "./header";
export default function App() {
  const [state, setstate] = useState([]);
  console.log(state, "Joker");
  const array = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDduFw54H5IFfFDvng4Wws96yenR9yx_DZ0PFSul8mKg&s",
      name: "Italian Pizza",
      price: 2,
      info: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
    },
    {
      img: "https://cdn.yemek.com/mnresize/1250/833/uploads/2022/03/ev-usulu-pizza-yemekcom.jpg",
      name: "Ev Usulü Pizza",
      price: 3,
      info: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB-K6Nbjn95uE6zsyphftwa2BMczct519BEEqffXAS2g&s",
      name: "Neapolitan Pizza",
      price: 4,
      info: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia",
    },
  ];

  return (
    <>
      <header>
        <Header data={state} setData={setstate} />
      </header>
      <main>
        {array.map((item, index) => {
          return <Card data={state} setData={setstate} {...item} key={index} />;
        })}
      </main>
    </>
  );
}
