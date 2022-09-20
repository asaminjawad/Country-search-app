import { useEffect, useState } from "react";
import Countries from "./Components/Countries";
import "./App.css";
import Search from "./Components/Search";

const URL = "https://restcountries.com/v3.1/all";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const fetchData = async (URL) => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const removeCountry = (name) => {
    const filteredData = filteredCountries.filter(
      (country) => country.name.common !== name
    );
    setFilteredCountries(filteredData);
  };

  const searchText = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilteredCountries(newCountries);
  };

  useEffect(() => {
    fetchData(URL);
  }, []);

  return (
    <>
      <h1>Country App</h1>
      <Search searchText={searchText} />
      {isLoading && <h1>Loading Data</h1>}
      {isError && <h1>{isError.message}</h1>}
      {countries && (
        <Countries
          countries={filteredCountries}
          removeCountry={removeCountry}
        />
      )}
    </>
  );
}

export default App;
