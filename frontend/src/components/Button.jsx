export const Button=({label,onClick})=>{
    return <div className="flex justify-center bg-black rounded-md hover:bg-slate-800 my-4 py-2"> 
        <button className="text-white font-medium text-sm" onClick={onClick}>{label}</button>
    </div>
}