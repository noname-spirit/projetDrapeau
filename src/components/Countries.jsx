import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Countries = (props) => {
  // useState permet de modifier l'état d'unedonnée
  const [data, setData] = useState([]); // On récupere les donnée dans un tableau
  const [sortData, setSortData] = useState([]); // Permet de trie des données

  const [rangeValue, setRangeValue] = useState(36);
  const [selectedRadio, setSelectedRadio] = useState("");
  const radio = ["Africa", "America", "Asia", "Europe", "Oceania"];

  // Permet de stopper la requette (une seule fois)
  useEffect(() => {
    // Permet de faire une requette en get vers l'API
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,population,region,capital,flag"
      )
      .then((res) => setData(res.data));
    const sortedCountry = () => {
      const countryObj = Object.keys(data).map((i) => data[i]);

      // permet d'afficher la population
      const sortedArray = countryObj.sort((a, b) => {
        return a.population - b.population;
      });
      sortedArray.length = rangeValue;
      setSortData(sortedArray);
    };
    sortedCountry();
  }, [data, rangeValue]);

  return (
    <div className="countries">
      <div className="sort_container">
        <input
          type="range"
          min="1"
          max="250"
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        <ul>
          {radio.map((radio) => {
            return (
              <li key={radio}>
                <input
                  type="radio"
                  id={radio}
                  value={radio}
                  checked={radio === selectedRadio}
                  onChange={(e) => setSelectedRadio(e.target.value)}
                />
                <label htmlFor={radio}> {radio} </label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="countries_liste">
        {sortData
          .filter((country) => country.region.includes(selectedRadio))
          .map((country) => (
            <Card country={country} key={country.name} />
          ))}
      </div>
    </div>
  );
};

export default Countries;
