import React from "react";
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
         </div>
   )
};

export default PeriodicTable;
