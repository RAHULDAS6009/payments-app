import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { ButtonWarning } from "../components/ButtonWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import eyeLogo from "../assets/eyeButton.svg";

export const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="grid place-items-center h-screen w-full bg-slate-100    ">
      <div className="h-[480px] w-[300px]   rounded shadow-lg bg-slate-300 px-4">
        <Heading label={"Sign Up"}></Heading>
        <SubHeading
          label={"Enter your information to create an account"}
        ></SubHeading>
        <InputBox
          label={"First Name"}
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
        <InputBox
          label={"Last Name"}
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        <InputBox
          label={"Email"}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
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
        <Button
          label={"Sign Up"}
          onClick={async() => {
            
            const response=await axios.post("http://localhost:3000/api/v1/user/signup", {
                firstname: firstname,
                lastname: lastname,
                username: username,
                password: password,
              })
              localStorage.setItem("token",response.data.token);
              // localStorage.removeItem ->when we logout
            navigate("/dashboard");
          }}
        />
        <ButtonWarning
          warning={"Don't have an account"}
          to={"/signin"}
          label={"Login"}
        />
      </div>
    </div>
  );
};
