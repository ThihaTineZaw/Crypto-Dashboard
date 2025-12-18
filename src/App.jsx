import { useState } from "react";
import { useEffect } from "react";
import ErrorCard from "./components/ErrorCard";
import LoadingCard from "./components/LoadingCard";
import Searchbox from "./components/Searchbox";
import Header from "./components/Header";
import Card from "./components/Card";
import Limit from "./components/Limit";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(10);

  // filter search value
  const searchValue = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  //  api url
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
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [limit]);

  return (
    <>
      <div className="max-w-9xl flex justify-between items-center p-4 bg-slate-600 text-white shadow-md">
        <div>
          <Header />
        </div>
      </div>

      {loading && <LoadingCard />}

      {error && <ErrorCard error={error} />}

      <div className="flex justify-end mt-4 mx-4">
        <Limit limit={limit} setLimit={setLimit} />
        <Searchbox search={search} setSearch={setSearch} />
      </div>

      {coins && !loading && !error && (
        <div className="max-w-9xl mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {searchValue.map((coin) => {
              return (
                <div
                  key={coin.id}
                  className="bg-white rounded-lg shadow-md p-4"
                >
                  <Card coin={coin} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default App;
