import { Link } from "react-router";

const Header = () => {
    return ( 
      <div className="max-w-9xl bg-gray-100   text-slate-900 flex justify-between items-center px-4 py-6 shadow-md">
         <div className="text-lg md:text-2xl lg:text-3xl font-bold select-none">
            <Link to='/'>🚀 Crypto Dash</Link>
         </div>
         <div className="text-md md:text-2xl font-bold select-none space-x-1.5 md:space-x-5 md:mr-5">
          <Link to='/' className="hover:font-extrabold">Home</Link>
          <Link to='/about' className="hover:font-extrabold">About</Link>
         </div>
      </div>
     );
}
 
export default Header;
