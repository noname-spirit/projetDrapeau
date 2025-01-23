import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Countries = (props) => {
  //  le useState permet de modifier l'état d'une donée
  const [data, setData] = useState([]); //on récupere les donnée dans un tableau vide
  const [sortData, setSortData] = useState([]); // permet le trie des données

  //  le useEffect permet de génerer des effets de bord
  //  ici le fait d'ajouter une dépendence permet de stopper la requette qui se fait en boucle
  useEffect(() => {
    // permet de faire une requette en get vers l'API
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,population,region,capital,flag"
      )
      .then((res) => setData(res.data));

    // const  sortedCountry = () => {

    // }
    // setSortData()
  }, []);

  return (
    <div className="countries">
      <div className="countries_liste">
        {data.map((country) => (
          <Card country={country} key={country.name} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
