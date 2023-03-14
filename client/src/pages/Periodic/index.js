import React, { useState, useEffect } from "react";
import axios from "axios";
import PeriodicTable from "../../components/PeriodicTable";
<<<<<<< Updated upstream
import "./styles.scss";

const Periodic = () => {
  const fruit = ["Apple","Orange","Lemon"];
  return (
    <div className="container-periodic">
         {fruit.map((item)=>{
           return <h1>{item}</h1>
         })}
=======
import styles from "./styles.module.scss";
import Sidebar from "../../components/Sidebar";
import classNames from "classnames/bind";
import { ElementContext } from "../../storage/elements-context";
let cx = classNames.bind(styles);

const Periodic = () => {
  const [Elements, SetElements] = useState();
  const [Category, SetCategory] = useState("");
  const ChangeCategory = (e) => {
    SetCategory(e.target.value);
  }
  const [BubbleIndex,SetBubbleIndex] = useState(null);
   const ChangeBubbleIndex = (i) => {
       SetBubbleIndex(i);
   }
  const MendelevIndex = (arr) => {
    let above = [];
    let bottom = [];
   
      above = arr.filter((item) => {
        if (item.category !== "Lanthanide" && item.category !== "Actinide") {
          return item;
        }
      });
       bottom = arr.filter((item) => {
          if (item.category === "Lanthanide" || item.category === "Actinide") {
            return item;
          }
        }); 
        SetElements(above.concat(bottom));
  };
  const GetElements = async () => {
    try {
      const elementData = await axios.get(
        "http://localhost:5000/api/element/list-elements"
      );
      MendelevIndex(elementData.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetElements();
  }, []);
  return (
    <div className={cx("container")}>
      <Sidebar />
      <ElementContext.Provider value={{data:Elements,ChangeBubbleIndex,BubbleIndex,ChangeCategory,Category}}>
       <PeriodicTable elements={Elements} index={BubbleIndex}/>
      </ElementContext.Provider>
>>>>>>> Stashed changes
    </div>
  );
};

export default Periodic;
