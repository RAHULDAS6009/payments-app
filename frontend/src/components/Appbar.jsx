export const AppBar = ({ userlogo }) => {
  
  return (
    <div className="flex justify-between ">
      <div className="text-2xl font-bold mt-2">Payments App</div>
      <div className="w-[200px] flex justify-between p-2 mb-1.8">
        <div className="font-bold text-lg pt-1.5">Hello Username</div>
        <button className="rounded-full bg-slate-300 w-10 h-10 font-medium text-slate-700">{userlogo}</button>
      </div>
      
    </div>
  );
};
