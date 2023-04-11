import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Paper,Avatar,Button } from '@mui/material';
import { blue } from '@mui/material/colors';
import DateRangeIcon from '@mui/icons-material/DateRange';
import SendIcon from '@mui/icons-material/Send';
import SchoolIcon from '@mui/icons-material/School';
import UserInfo from '../UserInfo';
let cx = classNames.bind(styles);

const UserContent = ({user,SendData}) => {
  return (
    <div className={cx('container')}>
       <Paper className={cx('user-wrapper')}>
            <div className={cx('header')}>
            <Avatar sx={{ bgcolor: blue[500] }} className={cx('avatar')} >N</Avatar>
            </div>
            <div className={cx('detail')}>
            <label>{user.username && user.username  }</label>
             <div className={cx('user-info')}>
               
                <DateRangeIcon className={cx('icon')}/>
               <p>Joined {user.createdAt && user.createdAt.slice(0,10)}</p>
               <SendIcon className={cx('icon')}/>
               <p>{user.email && user.email}</p>
               <SchoolIcon className={cx('icon')}/>
               <p>Intermediate</p>
             </div>
             <div className={cx('category')}>
                   <Button variant='outlined' >Khóa học</Button>
                   <Button variant='outlined' >Thông tin</Button>
             </div>

            </div>
       </Paper>
       <UserInfo user={user} SendData={SendData} />
    </div>
  )
}

export default UserContent