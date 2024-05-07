import {  BrowserRouter, Route, Routes } from "react-router-dom";
import  {Signin}  from "./pages/Signin";
import  {Signup}  from "../src/pages/Signup";
import  {SendMoney}  from "./pages/SendMoney";
import { Dashboard } from "./pages/Dashboard";

function App() {
  return (

    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />

        <Route path="/signin" element={<Signin />}></Route>

        <Route path="/signup" element={<Signup />}></Route>

        <Route path="/send" element={<SendMoney />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
