import React from "react";
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Element from "./Element";
let cx = classNames.bind(styles);
const PeriodicTable = () => {
   const array =[];
   const addArray = () => {
    for(let i = 1 ; i<119   ; i++){
      array.push(<Element index={i}/>)
    }
   }
   addArray();
   return (
         <div className={cx("container")}>
            <div className={cx("grid-table")}>       
            {/* <div className={cx("row","first")}>
               <Element/>
               <Element/>
            </div>
            <div className={cx("row","second")}>
               {array.map((item,i)=>{
                  if(i>1&&i<20){
                     return item
                  }
               })}
            </div> */}
            <div className={cx("info")}>
            </div>
            {array}
            <div/>
            </div>
         
            

            
         </div>
   )
};

export default PeriodicTable;
