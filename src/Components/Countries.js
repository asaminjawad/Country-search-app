import React from "react";
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";
import style from "./countries.module.css";

function Countries(props) {
  const countries = props.countries;

  return (
    <section className={style.countries}>
      {countries.map((country) => {
        const countryNew = { country, id: uuidv4() };
        return (
          <Country
            {...countryNew}
            key={countryNew.id}
            removeCountry={props.removeCountry}
          />
        );
      })}
    </section>
  );
}

export default Countries;
