import React from "react";
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);
const Element = ({number,symbol,name,mass,className,children}) => {
  return (
    <div draggable={true} className={cx("element-box",className)}>
      <div className={cx("mol-section")}>{number && number}</div>
      <div className={cx("label-section")}>{symbol && symbol}</div>
      <div className={cx("detail-section")}>
        <p>{name && name}</p>
        {children && children}
        <p>{mass && mass}</p>
      </div>
    </div>
  );
};

export default Element;
