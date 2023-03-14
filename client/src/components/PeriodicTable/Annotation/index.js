import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Element from '../Element';
let cx = classNames.bind(styles);
let config = {
    name: "Hydrogen",
    symbol: "H",
    mass: "1.008",
    number: "1",
  };
const Annotation = () => {
  return (
    <div className={cx("annotation")}>
    <Element className={cx("large-element")} data={config}>
      <React.Fragment>
        <div className={cx("lbl-atomic-number")}>Atomic number</div>
        <div className={cx("lbl-symbol")}>Symbol</div>
        <div className={cx("lbl-mol")}>Atomic mass</div>
        <div className={cx("lbl-name")}>Name</div>
      </React.Fragment>
    </Element>
  </div>
  )
}

export default Annotation