import { Link } from "react-router";

const ErrorPage = () => {
    return ( 
    <>
      <div className="max-w-lg mt-22 mx-auto flex flex-col items-center justify-center text-center space-y-6">
           <div className="text-5xl md:7xl lg:9xl font-extrabold">
             Oops!
           </div>
           <div className="space-y-3 text-md md:text-xl">
            <p>404 - PAGE NOT FOUND</p>
           <p>This page you are looking for might has been removed</p>
           
           </div>
           <div className="mt-4">
               <Link to='/' className="bg-blue-600 text-slate-100 font-extrabold px-5 py-3 rounded-xl hover:bg-blue-700 hover:shadow-xl">GO TO HOMEPAGE</Link>
           </div>
        </div>
    </>
     );
}
 
export default ErrorPage;