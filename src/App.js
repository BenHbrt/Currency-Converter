import './App.scss';
import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  // State for holding list of currencies
  const [currencies, setCurrencies] = useState(null)

  // Function for loading list of currencies
  const loadCurrencies = async () => {
    const response = await axios.get("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json")
    const currenciesList = []
    Object.keys(response.data).forEach((item) => {
      const currencyObj = {}
      currencyObj.code = item
      currencyObj.name = response.data[item]
      currenciesList.push(currencyObj)
    })
    setCurrencies(currenciesList)
  }

  // Load list of currencies after page has loaded
  useEffect(() => {
    loadCurrencies()
  }, [])

  return (
    <div className="App">
      <h1>Text</h1>
      <button onClick={() => console.log(currencies)}>Currencies List</button>
    </div>
  );
}

export default App;
