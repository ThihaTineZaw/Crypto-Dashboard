import LoadingCard from "./LoadingCard";
import ErrorCard from "./ErrorCard";
import { Link } from "react-router";
import CoinChart from './Chart'
const CoinDetail = ({coin,loading,error}) => {

    return (
        <>
        {loading && <LoadingCard />}

        {!loading && !error && 
          <div className="w-full flex justify-center items-center">
             <div className="max-w-xl mx-3 my-5 bg-slate-200 p-5 rounded-2xl shadow-xl">
               <div className="my-6">
               <Link to='/' className="bg-blue-600 text-slate-100 font-extrabold p-4 rounded-xl hover:bg-blue-700 hover:shadow-xl"><span className="text-xl mr-1">⏴</span>Back</Link>
                    </div>
                    <div className="flex flex-col items-center space-y-2.5">
                        <img src={coin.image.large} alt="" className="w-22 md:w-64" />
                       <div className="text-center space-x-2 font-bold text-slate-800">
                         <span className="text-2xl md:text-4xl">{coin.name}</span>
                        <span>({coin.symbol.toUpperCase()})</span>
                       </div>
                    <div className="text-center text-slate-600">
                        <p>{coin.description.en.split(". ")[0]}.</p>
                    </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-5 text-md text-center font-bold text-slate-800 md:text-xl ">
                        <span>Current Price : ${coin.market_data.current_price.usd.toLocaleString()}</span>
                        <span>All Time Height Price : ${coin.market_data.ath.usd.toLocaleString()} ({new Date(coin.market_data.ath_date.usd).toLocaleDateString()}) </span>
                        <span>All Time Low Price : ${coin.market_data.atl.usd.toLocaleString()}  ({new Date(coin.market_data.atl_date.usd).toLocaleDateString()})</span>
                        <span>Total Supply : {Number(coin.market_data.total_supply).toLocaleString()}</span>
                        <span>Max Supply : {Number(coin.market_data.max_supply).toLocaleString()}</span>
                       
                    </div>

                    <div>
                        <CoinChart coinid={coin.id} />
                    </div>

                    <div className="mx-auto mt-5">
                        <span className=""><span className="font-bold text-lg">Categories : </span> { coin.categories ? coin.categories.join(", ") : "N/A"}</span>
                    </div>
           </div>
          </div>
    
          }
        </>
      );
}
 
export default CoinDetail ;