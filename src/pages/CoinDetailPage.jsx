import { useParams } from "react-router";
import { useEffect, useState } from "react";
import CoinDetail from "../components/CoinDetail";
const CoinDetailPage = () => {

    const {id} = useParams()
    const [coin, setCoin] = useState({})
    const [loading, setLoading] = useState(true)
    const [error,setError] = useState(null)

    const coinURL = `${import.meta.env.VITE_API_COINDETAIL}/${id}?vs_currency=usd&days=7`
    useEffect(()=>{
        const fetchCoin = async()=>{
           try{
            const res = await fetch(coinURL)
            if(!res.ok) throw new Error('Something Wrong')
            const data = await res.json()
            setCoin(data)
            setLoading(false)
           }catch(error){
            console.log(error.message)
            setError(error.message)
            setLoading(false)
           }finally{
            setLoading(false)
           }
        }
        
        fetchCoin();
    },[id])

    return ( 
        <>
        <CoinDetail coin={coin} loading={loading} error={error}/>
        </>
     );
}
 
export default CoinDetailPage;