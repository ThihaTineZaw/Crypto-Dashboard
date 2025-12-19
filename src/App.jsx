import { useState } from "react";
import { useEffect } from "react";
import { Routes } from "react-router";
import { Route } from "react-router";
import HomePage from "./pages/home.jsx";
import AboutUsPage from "./pages/about.jsx";
import ErrorPage from "./pages/404.jsx";
import CoinDetailPage from "./pages/CoinDetailPage.jsx";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(10);
  const [orderBy, setOrderBy] = useState("market_cap_desc");

  const url = `${import.meta.env.VITE_API_URL
    }order=market_cap_desc&per_page=${limit}&page=1`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const jsonData = await res.json();
        setCoins(jsonData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [limit]);



  return (
    
      
       <Routes>

      <Route path="/"
        element={<HomePage coins={coins} loading={loading} error={error} search={search} setSearch={setSearch} 
        limit={limit} setLimit={setLimit} orderBy={orderBy} setOrderBy={setOrderBy}/>}>
      </Route>

      <Route path="/about"
        element={<AboutUsPage />}>
      </Route>

      <Route path="/*"
        element={<ErrorPage />}>
      </Route>

      <Route path='/coin/:id' element={<CoinDetailPage />}>

      </Route>

       </Routes>
      
  
    
  );
};

export default App;
