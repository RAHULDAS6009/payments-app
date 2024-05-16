import {Heading} from "../components/Heading"
import {SubHeading} from "../components/SubHeading"
import {InputBox} from "../components/InputBox"
import {Button} from "../components/Button"
import {ButtonWarning} from "../components/ButtonWarning"
import eyeLogo from "../assets/eyeButton.svg"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signin=()=>{
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [type,setType]=useState(false);
    const navigate=useNavigate();
   
    return (
        <div className="grid place-items-center h-screen w-full bg-slate-100">

        <div className="h-[340px] w-[300px]   rounded shadow-lg bg-slate-300 px-4 "> 
            <Heading label={"Sign In"}></Heading>
            <SubHeading label={"Enter your credentials to access your account"}></SubHeading>
            <InputBox label={"Email"} onChange={(e) => {
              setUsername(e.target.value);
            }}/>
            <div className="relative">
          <InputBox
            label={"Password"}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type={type ? "text" : "password"}
          />
          <button
            onClick={() => {
              setType(true);
            }}
          >
            <img
              className="absolute right-2 top-9 w-5 bg-blue-200 hover:bg-blue-400 rounded-full "
              src={eyeLogo}
              alt=""
            />
          </button>
        </div>
            <Button label={"Sign in"} onClick={async()=>{
             await axios.post("http://localhost:3000/api/v1/user/signin",{
                username: username,
                password: password
              }).then((res)=>{
                console.log(res.data.token);

              })
              console.log("hello")
              navigate("/dashboard")
            }}
            />
            <ButtonWarning warning={"Don't have an account"} to={"/signup"} label={"Sign Up"}/>
        </div>
        </div>
    )
}