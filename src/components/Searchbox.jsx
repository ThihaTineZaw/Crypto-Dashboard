const Searchbox = ({search, setSearch}) => {
    return ( 
        <div>
            <input type="text" value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search..." className="w-32 md:w-55 lg:w-64 p-2 border border-slate-500 rounded-md focus:border-slate-700 focus:outline-none" />
        </div>
     );
}
 
export default Searchbox;