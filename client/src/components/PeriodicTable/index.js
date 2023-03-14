import React from "react";
<<<<<<< Updated upstream
import "./styles.scss";
const PeriodicTable = () => {
  return <div className="periodic-table">
         <div className="element-wrapper">
            
=======
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Table from "./Table";
import Bubble from "./Bubble";
let cx = classNames.bind(styles);

const PeriodicTable = ({elements,index}) => {
   const findElementByNumber = (arr,i) => {
        return  arr.filter((item)=>{
            return item.number === i;
       })[0]
   }
   return (
         <div className={cx("container")}>
           {elements && <Table elements={elements} /> }
           {index && <Bubble element={findElementByNumber(elements,index)}/> }   
>>>>>>> Stashed changes
         </div>
  </div>;
};

export default PeriodicTable;
