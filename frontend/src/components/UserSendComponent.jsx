import { SendMoneyButton } from "./SendMoneyButton";

export const UserSendComponent=({user})=>{
    return <div className="flex justify-between my-8 shadow-lg rounded-2xl bg-slate-100 ">
    <div className="flex justify-between  w-[150px]">
      <button className="rounded-full bg-slate-300 w-10 h-10 font-medium text-slate-700">
        {user.firstname[0]}
      </button>
      <div className="text-lg font-medium pt-1.5 ">{user.firstname+" "+user.lastname}</div>
    </div>
    <SendMoneyButton user={user} />
  </div>
}