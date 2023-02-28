import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { useParams, useSearchParams } from "react-router-dom";
import Switch from "../../components/Auth/Switch";
import RightSigninBox from "../../components/Auth/RightSigninBox";
import MiddleBox from "../../components/Auth/MiddleBox";

let cx = classNames.bind(styles);
const Authentication = () => {
  const param = useParams();
  const [authState, setAuthState] = useState(param.switch);
  const Change = () => {
    setAuthState((prev) => {
      if (prev === "login") { 
        return "register";   
      } else if (prev === "register") {
        return "login";
      }
    });
  };
  return (
    <div className={cx("container")}>
      <Switch switch={Change} />
      <MiddleBox/>
      <RightSigninBox />
    </div>
  );
};

export default Authentication;
