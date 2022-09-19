import { useEffect, useState } from "react";

const URL = "https://restcountries.com/v3.1/all"

function App() {
  
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [countries, setCountries] = useState([]);

  const fetchData = async(URL)=>{
      setLoading(true)
      
  } 
  
  useEffect(()=>{
    fetchData(URL)
  }, [])
  
  return (
    <div>app</div>
  );
}

export default App;
