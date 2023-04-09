import React, { useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { useParams, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../storage/auth-context";
import Switch from "../../components/Auth/Switch";
import RightSigninBox from "../../components/Auth/RightSigninBox";
import MiddleBox from "../../components/Auth/MiddleBox";
import axios from "axios";
import RightRegisterBox from "../../components/Auth/RightRegisterBox";
let config = {
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,

}

let cx = classNames.bind(styles);
const Authentication = () => {
  const param = useParams();
  const Navigate = useNavigate();
  const [authState, setAuthState] = useState(param.switch);
  const user = useContext(AuthContext);
  const Change = () => {
    setAuthState((prev) => {
      if (prev === "login") { 
        return "register";   
      } else if (prev === "register") {
        return "login";
      }
    });
  };
  const sendData = async (data) => {
     try{
      const user = await axios.post('/auth/login',data,config);
      Navigate('/hub');
     
     }catch(err){
        console.log(err);
     }
  }
  const sendRegister = async (data) => {
    try{
      const user = await axios.post('/auth/register',data,config);
      Navigate('/auth/login');
     
     }catch(err){
        console.log(err);
     }
  }
  return (
    <div className={cx("container")}>
      <Switch switch={Change} authState={authState}/>
      <MiddleBox/>
      {authState=="login" ? <RightSigninBox sendData={sendData} /> : <RightRegisterBox sendRegister={sendRegister}/> }
   
    </div>
  );
};

export default Authentication;
