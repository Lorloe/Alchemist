import React ,{ useContext} from "react";
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { logoWithText } from "../../assets/svg";
import SidebarItem from "../SidebarItem";
import { ArraySidebar } from "./config";
import { Book } from "../../assets/png";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router";
import { AuthContext } from "../../storage/auth-context";
let cx = classNames.bind(styles);
const Sidebar = ({lbl}) => {
   const data = useContext(AuthContext);
   const Navigate = useNavigate();
  return (
    <div className={cx('wrapper-sidebar')}>
      <div className={cx('logo-sidebar')}>
        <img src={logoWithText} alt="logo" onClick={()=>{
          Navigate('/');
        }} />
      </div>
      <div className={cx('list-sidebar-item')}>
       {ArraySidebar.map((item)=><SidebarItem key={item.text} icon={item.icon} text={item.text} isChecked={lbl===item.lbl} nav={item.nav} />)}
      </div>
      <div className={cx('guide-sidebar')}>
           <img src={Book} className={cx('book')}/>
           <h3>Tutorial</h3>
           <p>Đọc hướng dẫn <mark>tại đây</mark> để biết thêm về cách sử dụng website</p>
      </div>
      <div className={cx('user')}>
          <div className={cx('user-wrapper')}>
             <div className={cx('user')}>
             <Avatar>N</Avatar>
             <div className={cx('info')}>
                {  <label className={cx('username')}>Thanhx001</label> }
                 <label className={cx('email')}>Thanhx001@gmail.com</label>
             </div>

             </div>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
