import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Discuss, RotatingLines } from "react-loader-spinner";

export const SendMoney = () => {
  const [amount, setAmount] = useState(0);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const [transfer, setTransfer] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen grid place-items-center ">
      {transfer ? (
        <Loader />
      ) : (
        <div className="w-[350px] h-[300px] rounded-lg shadow-2xl flex flex-col justify-around p-3.5">
          <div className="font-bold text-center text-2xl">Send Money</div>
          <div className="flex mt-16">
            <button className="bg-green-400 rounded-full w-[50px] h-[50px] text-xl font-medium hover:bg-green-500 text-white">
              {name[0].toUpperCase()}
            </button>
            <div className="text-xl font-bold pl-4 pt-2">{name}</div>
          </div>
          <div className="text-xs font-medium -mt-2 ml-1.5">Amount (in Rs)</div>
          <input
            className="w-full border rounded px-2 h-10"
            placeholder="Enter amount..."
            type="number"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <button
            className="bg-green-400 hover:bg-green-500 rounded-lg w-full h-10 text-white font-bold"
            onClick={() => {
              setTransfer(true);
              setTimeout(() => {
                axios.post(
                  "http://localhost:3000/api/v1/account/transfer",
                  {
                    amount: amount,
                    to: id,
                  },
                  {
                    headers: {
                      Authorization: "Bearer " + localStorage.getItem("token"),
                    },
                  }
                );

                navigate("/dashboard");
              }, 700);
            }}
          >
            Initiate transfer
          </button>
        </div>
      )}
    </div>
  );
};

function Loader() {
  return (
      <Discuss
        visible={true}
        height="100"
        width="100"
        ariaLabel=""
        wrapperStyle={{}}
        wrapperClass="discuss-wrapper"
        color="#0000FF"
        backgroundColor="blue"
        />
  );
}
