import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Countries = (props) => {
  const [data, setdata] = useState([]); // on recupere les donnée dans un tableau
  const [sortData, setSortData] = useState([]); // permet le trie des données

  // useStates permet de modifier l'etat d'un e donné

  // useEffect permet de generer des effets de bord
  // ici le fait d'ajouter une dependance permet de stopper la requtette qui se fait en boucle
  useEffect(() => {
    // permet de faire une requette en get vers l'api
    // axios uniquement pour le requette html
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,population,region,capital,flag"
      )
      .then((res) => setdata(res.data));
  }, []);

  console.log(data);

  return (
    <div className="countries_liste">
      {sortData.map(() => (
        <Card country={country} key={country.name} />
      ))}
    </div>
  );
};

export default Countries;
