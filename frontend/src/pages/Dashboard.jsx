import { AppBar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"

export const Dashboard=()=>{
    return (
        <div className="mx-2">
            <AppBar userlogo={"R"}/>
            <hr />
            <Balance/>
            <Users/>
        </div>
    )
}
