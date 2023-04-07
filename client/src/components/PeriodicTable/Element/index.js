import React from "react";
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);
const Element = ({index}) => {
  return (
    <div draggable={true} className={cx("element-box")}>
      <div className={cx("mol-section")}>{index}</div>
      <div className={cx("label-section")}>H</div>
      <div className={cx("detail-section")}>
        <p>Hydrogen</p>
        <p>1.008</p>
      </div>
    </div>
  );
};

export default Element;
