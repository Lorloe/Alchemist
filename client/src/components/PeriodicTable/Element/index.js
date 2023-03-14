import React,{useContext} from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { ElementContext } from "../../../storage/elements-context";
let cx = classNames.bind(styles);
const Element = ({ data, className, children }) => {
  const {ChangeBubbleIndex,Category} = useContext(ElementContext);
  if (data) {
    return (
      <div draggable={true} className={cx("element-box", className ,Category==data.category ? Category.replace(/\s/g,'_').toLowerCase() : "null" )} onClick={()=>{
         ChangeBubbleIndex(data.number)
      }}>
        <div className={cx("index-section")}>{data.number}</div>
        <div className={cx("label-section")}>{data.symbol}</div>
        <div className={cx("detail-section")}>
          <p>{data.name}</p>
          <p>{data.mass}</p>
        </div>
        {children}
      </div>
    );
  }
};

export default Element;
