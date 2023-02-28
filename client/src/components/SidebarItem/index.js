import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
let cx = classNames.bind(styles);
const SidebarItem = ({icon,text}) => {
  
   
    return (
    <div className={cx('sidebar-item')}>
        <FontAwesomeIcon icon={icon} className={cx('icon')} />
         <div className={cx('text')}>{text}</div>
    </div>
    )
}

export default SidebarItem