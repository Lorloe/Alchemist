import React from "react";
import PeriodicTable from "../../components/PeriodicTable";
import "./styles.scss";

const Periodic = () => {
  const fruit = ["Apple","Orange","Lemon"];
  return (
    <div className="container-periodic">
         {fruit.map((item)=>{
           return <h1>{item}</h1>
         })}
    </div>
  );
};

export default Periodic;
