import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { chemistryGlass } from '../../assets/svg';
import {Chip , Stack}  from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { Navigate, useNavigate } from 'react-router';

let cx = classNames.bind(styles);
const CourseItem = ({type,name,id}) => {
  const Navigate = useNavigate();
  return (
    <div className={cx('course-item')} onClick={()=>{
      Navigate('/course/'+id)
    }}>
    <div className={cx('banner',type)}>
       <img src={chemistryGlass} />
    </div>
    <div className={cx('detail')}>
      <label className={cx('name')}>{name ? name : "Nghiên cứu"}</label>
    </div>
    <Stack direction="row" spacing={1}>
    <Chip icon={<TimelineIcon/>} label="300hrs" variant="outlined" />
    <Chip icon={<LibraryBooksIcon/>} label="50" variant="outlined" />
    </Stack>
</div>
  )
}

export default CourseItem