const LimitAndSearch = ({
  limit,
  setLimit,
  search,
  setSearch,
  orderBy,
  setOrderBy,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mx-4 md:mx-9 my-6 gap-4">

      <div className="w-full md:flex-1">
        <div className="relative w-full">
           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
           </div>
           
           <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search coins..."
            className="w-full pl-10 p-2 border border-gray-300 rounded-md focus:border-slate-700 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex w-full md:w-auto items-center gap-4">
        
      
        <div className="flex items-center space-x-2 whitespace-nowrap">
          <label htmlFor="limit" className="text-sm font-medium text-gray-700">
            Limit:
          </label>
          <select
            id="limit"
            onChange={(e) => setLimit(e.target.value)}
            className="border border-gray-300 p-2 rounded-md focus:outline-none"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
            <option value="250">250</option>
    
          </select>
        </div>

        {/* Sort By */}
        <select
          onChange={(e) => setOrderBy(e.target.value)}
          name="orderBy"
          className="flex-1 w-full md:w-56 border border-gray-300 p-2 rounded-md focus:outline-none"
        >
          <option value="market_cap_desc">Market Cap Descending</option>
          <option value="market_cap_asc">Market Cap Ascending</option>
          <option value="price_change_24h_desc">Price Change Descending</option>
          <option value="price_change_24h_asc">Price Change Ascending</option>
        </select>
      </div>
    </div>
  );
};

export default LimitAndSearch;