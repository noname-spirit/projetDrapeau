const Card = (props) => {
  const { country } = props;
  return (
    <ul>
      <li>
        <img src="" alt="flag" />
        <div>
          <ul>
            <li>{country.name}</li>
            <li>{country.capital}</li>
            <li>pop: {country.population}</li>
          </ul>
        </div>
      </li>
    </ul>
  );
};

export default Card;
