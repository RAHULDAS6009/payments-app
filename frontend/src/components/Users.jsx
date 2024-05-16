import { useEffect, useState } from "react";
import { UserSendComponent } from "./UserSendComponent";
import axios from "axios"
export const Users = () => {
  const [users,setUsers]=useState([]);
  const [filter,setFilter]=useState("");

  //debouncing added
  useEffect(()=>{
     axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter)
    .then((res)=>{
      setUsers(res.data.user)
    })
  },[filter])
  
  return (
    <div>
      <div className="text-xl font-medium my-4 ">Users</div>
      <div className="flex">

      <input
        className="w-full h-10 border-2 rounded-2xl px-2"
        placeholder="Search Users..."
        type="text"
        onChange={(e)=>{
          setFilter(e.target.value)
        }}
      />
      {/* <button className="h-10 w-10 bg-green-400 rounded-lg">S</button> */}
      </div>
      <div className="">
        {users.map((user)=> <UserSendComponent user={user}/> )}
      </div>
    </div>
  );
};
