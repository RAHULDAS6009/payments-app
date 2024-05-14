import {Heading} from "../components/Heading"
import {SubHeading} from "../components/SubHeading"
import {InputBox} from "../components/InputBox"
import {Button} from "../components/Button"
import {ButtonWarning} from "../components/ButtonWarning"

export const Signup=()=>{
    return (
        <div className="grid place-items-center h-screen ">

        <div className="h-[480px] w-[300px]   rounded shadow-lg bg-slate-200 px-4"> 
            <Heading label={"Sign Up"}></Heading>
            <SubHeading label={"Enter your information to create an account"}></SubHeading>
            <InputBox label={"First Name"} />
            <InputBox label={"Last Name"} />
            <InputBox label={"Email"} />
            <InputBox label={"Password"} />
            <Button label={"Sign Up"}/>
            <ButtonWarning warning={"Don't have an account"} to={"/signin"} label={"Login"}/>
        </div>
        </div>
    )
}