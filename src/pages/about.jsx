import Header from "../components/Header";
const AboutUsPage = () => {

    return (  
        <>
          <Header />
        <div className="max-w-lg mt-12 mx-auto flex flex-col items-center justify-center">
            <div className="bg-slate-600 text-white mx-4 p-8 rounded-lg transition-all duration-200 shadow-lg shadow-slate-600 hover:shadow-slate-800  ">
                <h1 className="text-2xl font-extrabold text-center select-none md:text-3xl lg:text-4xl">About Us Page</h1>
            <div>
                <p className="text-center mt-6 text-md text-slate-200 select-none md:text-xl">
                This is a Crypto Dashboard application that provides real-time information about various cryptocurrencies. It allows users to search, filter, and sort cryptocurrencies based on different criteria such as market capitalization and price changes.
                </p>
            </div>
            </div>
        </div>
        </>
    );
}
 
export default AboutUsPage;