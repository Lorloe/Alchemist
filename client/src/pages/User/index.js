import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Sidebar from '../../components/Sidebar';
import UserContent from '../../components/UserContent';
let cx = classNames.bind(styles);

const User = () => {
  return (
    <div className={cx('container')}>
           <Sidebar/> 
           <UserContent/>
    </div>
  )
}

export default User