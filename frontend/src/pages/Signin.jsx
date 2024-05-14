import {Heading} from "../components/Heading"
import {SubHeading} from "../components/SubHeading"
import {InputBox} from "../components/InputBox"
import {Button} from "../components/Button"
import {ButtonWarning} from "../components/ButtonWarning"
export const Signin=()=>{
    return (
        <div className="grid place-items-center h-screen ">

        <div className="h-[340px] w-[300px]   rounded shadow-lg bg-slate-200 px-4 "> 
            <Heading label={"Sign In"}></Heading>
            <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
            <InputBox label={"Email"} />
            <InputBox label={"Password"} />
            <Button label={"Sign in"}/>
            <ButtonWarning warning={"Don't have an account"} to={"/signup"} label={"Sign Up"}/>
        </div>
        </div>
    )
}