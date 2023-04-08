import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Element from "./Element";
import Bubble from "./Bubble";
import axios from "axios";
import Annotation from "./Annotation";
let cx = classNames.bind(styles);
const PeriodicTable = () => {
  const [displayBubble, setDisplayBubble] = useState({});
  const [elements, setElements] = useState();

  const handleBubble = () => {
    setDisplayBubble((prev) => {
      return !prev;
    });
  };
 const indexOfPerdioc = (arr) => {
       const restArr = arr.filter((item)=>{
        if(item.category!=='Lanthanide' && item.category!== 'Actinide'){
          return item;
        };  
       })
       const lathanideArr = arr.filter((item)=>item.category=='Lanthanide');
       const actinideArr = arr.filter((item)=>item.category=='Actinide');
       const indexedArray = [...restArr,...lathanideArr,...actinideArr];
       return indexedArray;
 }
  const GetListElement = async () => {
    try {
      const data = await axios.get(
        " http://localhost:5000/api/element/list-elements"
      );
      setElements(indexOfPerdioc(data["data"]["elements"]));
      setDisplayBubble(data["data"]["elements"][0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    GetListElement();
  }, []);
  return (
    <div className={cx("container")}>
      <div className={cx("grid-table")}>
        {elements &&
          elements.map((item, i) => {
            return (
              <Element
                index={i}
                name={item.name}
                mass={item.mass}
                number={item.number}
                symbol={item.symbol}
              />
            );
          })}
        <div className={cx("info")}>
          <Annotation />
        </div>
        <div className={cx("sort")}>

        </div>
        <div />
      </div>
      {displayBubble && (
        <Bubble element={displayBubble} handleBubble={handleBubble} />
      )}
    </div>
  );
};

export default PeriodicTable;
