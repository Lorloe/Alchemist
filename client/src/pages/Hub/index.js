import React from 'react';
import Sidebar from '../../components/Sidebar';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);

const Hub = () => {
  return (
    <div className={cx('hub-container')}>
       <Sidebar />   
    </div>
  )
}

export default Hub