export const SendMoney = () => {
  return (
    <div className="w-full h-screen grid place-items-center ">
      <div className="w-[350px] h-[300px] rounded-lg shadow-2xl flex flex-col justify-around p-3.5">
        <div className="font-bold text-center text-2xl">Send Money</div>
        <div className="flex mt-16">
          <button className="bg-green-400 rounded-full w-[50px] h-[50px] text-xl font-medium hover:bg-green-500 text-white">
            A
          </button>
          <div className="text-xl font-bold pl-4 pt-2"> Friend's Name </div>
        </div>
        <div className="text-xs font-medium -mt-2 ml-1.5">Amount (in Rs)</div>
        <input className="w-full border rounded px-2 h-10" placeholder="Enter amount..." type="number" />
      <button className="bg-green-400 hover:bg-green-500 rounded-lg w-full h-10 text-white font-bold">Initiate transfer</button>
      </div>
    </div>
  );
};
