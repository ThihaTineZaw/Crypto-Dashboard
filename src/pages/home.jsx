import ErrorCard from "../components/ErrorCard";
import LoadingCard from "../components/LoadingCard";
import Header from "../components/Header";
import Card from "../components/Card";
import LimitAndSearch from "../components/Limit&Search";
import { Link } from "react-router";



  const HomePage = ({coins,limit,setLimit,search,setSearch,orderBy,setOrderBy,loading,error}) => {
     const filterCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  ).slice().sort((a, b) => {
    switch (orderBy){
        case "market_cap_desc":
            return b.market_cap - a.market_cap;
            case "market_cap_asc":
            return a.market_cap - b.market_cap;
             case "price_change_24h_desc":
            return b.price_change_percentage_24h - a.price_change_percentage_24h;
             case "price_change_24h_asc":
            return a.price_change_percentage_24h - b.price_change_percentage_24h;
        default:
    }
  });

    return ( 
        
       
       <>
      <Header />
          <LimitAndSearch
        limit={limit}
        setLimit={setLimit}
        search={search}
        setSearch={setSearch}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
      />
      
      {loading && <LoadingCard />}
      
      {error && <ErrorCard error={error} />}
      
  

      
      {!loading && !error && (
        <div className="max-w-9xl mx-2 md:mx-9 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-y-2 ">
            {filterCoins.map((coin) => (
            <Link to={`/coin/${coin.id}`} key={coin.id}>
             
                <Card coin={coin} />
              
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
         
     );
  }
   
  export default HomePage;