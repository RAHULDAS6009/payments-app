import { useEffect, useState } from "react";
import axios from "axios";

export const AppBar = () => {
  const [name,setName]=useState("");
  useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/account/balance",{
    headers:{
        "Authorization":"Bearer "+localStorage.getItem("token")
    }
    }).then((res)=>{
      console.log(res.data)
        setName(res.data.name)
    })
},[])
  return (
    <div className="flex justify-between ">
      <div className="text-2xl font-bold mt-2">Payments App</div>
      <div className="w-[200px] flex justify-between p-2 mb-1.8">
        <div className="font-bold text-lg pt-1.5">Hello {name}</div>
        <button className="rounded-full bg-slate-300 w-10 h-10 font-medium text-slate-700">{name[0]}</button>
      </div>
      
    </div>
  );
};
