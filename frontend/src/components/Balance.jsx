import { useEffect, useState } from "react"
import axios from "axios"
export const Balance=()=>{
    const [balance,setBalance]=useState(0);
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{
        headers:{
            "Authorization":"Bearer "+localStorage.getItem("token")
        }
        }).then((res)=>{
            setBalance(res.data.balance)
        })
    },[])
    return <div className="text-md font-bold my-4">Your Balance ₹{balance}</div>
}


