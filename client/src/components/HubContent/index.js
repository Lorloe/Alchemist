import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Banner from '../Banner';
import CourseHolder from '../CourseHolder';
import { BannerIcon } from '../../assets/png';
let cx = classNames.bind(styles);

const HubContent = () => {

  return (
    <div className={cx('container')}>
      <Banner color={'blue'} img={BannerIcon} title={'Chemistry Lesson'} description={'Khóa học hóa nhanh và hiệu quả'}/>
      <CourseHolder type={'novice'} title={'Novice Wizard'}/>
      <CourseHolder type={'intermediate'} title={'Intermediate Alchemist'} />
    </div>
  )
}

export default HubContent;