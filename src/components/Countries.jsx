import { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Countries = () => {
  const [data, setdata] = useState([]);

  console.log(
    axios.get(
      "https://restcountries.com/v2/all?fields=name,population,region,capital,flag"
    )
  );

  return (
    <div>
      <Card />
    </div>
  );
};

export default Countries;
