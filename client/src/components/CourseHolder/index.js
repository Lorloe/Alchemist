import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import CourseItem from '../CourseItem';
let cx = classNames.bind(styles);

const CourseHolder = ({title,badge,type,name,id}) => {
  return (
    <div className={cx('container')}>
      <div className={cx('course-wrapper')}>
         <div className={cx('title')}>
           <label>{title}</label>
           <div className={cx('badge')}>
                 Favorite
           </div>    
         </div>
         <div className={cx('list-courses')}>
         <CourseItem type={type} name={name} id={id} />
         <CourseItem type={type} />  
         </div>    
      </div>
    </div>
  )
}

export default CourseHolder