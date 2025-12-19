

const Card = ({coin}) => {
    return ( 
        <div>
           
        <div className="w-auto h-50 flex items-center space-x-4 mb-2 border bg-slate-200 border-gray-300 px-4 py-3 rounded-lg shadow-md md:h-44 hover:shadow-lg transition-shadow duration-200">
                  <img src={coin.image} alt={coin.name} className="w-12 h-12"/>
                  <div>
                    <h1 className="text-2xl font-semibold">{coin.name}</h1>
                    <p className="text-slate-600">{coin.symbol}</p>
                    <p className="text-lg font-bold">${coin.current_price.toLocaleString()} <span className={`font-medium ${coin.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}`}>({coin.price_change_percentage_24h.toFixed(2)}%)</span></p>
                    <p className="text-sm font-semibold text-slate-500">Total Supply : {Number(coin.total_supply).toLocaleString()}</p>
                    <p className="text-sm font-semibold text-slate-500">Maximum Supply : {coin.max_supply > 0 ? Number(coin.max_supply).toLocaleString() : "N/A"}</p>
                  </div>
                </div>
        </div>
     );
}
 
export default Card;