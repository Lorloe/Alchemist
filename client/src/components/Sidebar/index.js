import React from "react";
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { logoWithText } from "../../assets/svg";
import SidebarItem from "../SidebarItem";
import { faHome, faAtom} from '@fortawesome/free-solid-svg-icons'
import { ArraySidebar } from "./config";
import { Book } from "../../assets/png";
let cx = classNames.bind(styles);
const Sidebar = () => {
  
  return (
    <div className={cx('wrapper-sidebar')}>
      <div className={cx('logo-sidebar')}>
        <img src={logoWithText} />
      </div>
      <div className={cx('list-sidebar-item')}>
       {ArraySidebar.map((item)=><SidebarItem key={item.text} icon={item.icon} text={item.text}/>)}
      </div>
      <div className={cx('guide-sidebar')}>
           <img src={Book} className={cx('book')}/>
           <h3>Tutorial</h3>
           <p>Đọc hướng dẫn <mark>tại đây</mark> để biết thêm về cách sử dụng website</p>
      </div>
    </div>
  );
};

export default Sidebar;
