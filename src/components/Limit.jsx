const Limit = ({limit, setLimit}) => {
    return (
          
  <div className="flex space-x-5 items-center justify-center mr-4">
  <label for="limit" class="block mb-2.5 text-sm font-medium text-heading">Limit</label>
  <select id="limit" onChange={(e)=>setLimit(e.target.value)} class="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body">
    <option value="10">10</option>
    <option value="20">20</option>
    <option value="50">50</option>
    <option value="100">100</option>
  </select>
  </div>

      );
}
 
export default Limit;
