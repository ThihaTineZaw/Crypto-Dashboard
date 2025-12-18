const ErrorCard = ({error}) => {
    return ( 
        <div className="w-full h-screen flex justify-center items-center">
            <div className="max-w-md h-32 p-6 flex justify-around items-center rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-red-700 select-none">{error}</h2>
            </div>
        </div>
     );
}
 
export default ErrorCard;