import { SendMoneyButton } from "./SendMoneyButton";

export const UserSendComponent=()=>{
    return <div className="flex justify-between my-8 shadow-lg rounded-2xl bg-slate-100 ">
    <div className="flex justify-between w-[100px]">
      <button className="rounded-full bg-slate-300 w-10 h-10 font-medium text-slate-700">
        U1
      </button>
      <div className="text-lg font-medium pt-1.5">User1</div>
    </div>
    <SendMoneyButton />
  </div>
}