
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import Forgot from "./components/views/Forgot";
import Mongotest from "./components/views/Mongotest";

const Auth = () => {
  return (
  
    <Routes>
      <Route path="/" element={<Login />} exact />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/mongotest" element={<Mongotest />} />
      <Route path="/forgot-password" element={<Forgot />} />
    </Routes>
 
  );
};

export default Auth;
