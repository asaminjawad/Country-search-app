import React from "react";
import style from "./country.module.css";

function Country(props) {
  const { name, capital, region, area, flags } = props.country;

  const handleRemoveCountry = (name) => {
    props.removeCountry(name);
  };

  return (
    <article className={style.country}>
      <div>
        <img src={flags.png} alt="Images of the Flag" className={style.flag} />
        <h1>{name.common}</h1>
        <h3>Capital: {capital}</h3>
        <h3>Region: {region}</h3>
        <h3>Size: {area}</h3>
        <button
          className={style.btn}
          onClick={() => {
            handleRemoveCountry(name.common);
          }}
        >
          Remove Country
        </button>
      </div>
    </article>
  );
}

export default Country;
