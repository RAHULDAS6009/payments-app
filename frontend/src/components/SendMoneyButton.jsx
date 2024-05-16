import { useNavigate } from "react-router-dom";

export const SendMoneyButton = ({user}) => {
  const navigate=useNavigate();
  return (
    <button className="transition ease-in-out delay-150 bg-black hover:-translate-y-2 hover:scale-110 duration-500 text-white rounded-lg text-center w-[100px] pt-1.5 hover:bg-slate-800 font-medium text-small" onClick={(e)=>{
      console.log(user);
      navigate("/send?id="+user._id+"&name="+user.firstname)
    }}> 
      Send Money
    </button>
  );
};
