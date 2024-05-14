import {Link} from "react-router-dom"
export const ButtonWarning=({warning,to,label})=>{
    return <div className="text-sm text-center ">
        {warning}?<Link to={to} className="underline px-1">{ label}</Link>
    </div>
}