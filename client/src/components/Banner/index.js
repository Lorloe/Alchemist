import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { BannerIcon } from '../../assets/png';
let cx = classNames.bind(styles);

const Banner = () => {
  return (
    <div className={cx('container')}>
       <div className={cx('wrapper')}>
       <div className={cx('description')}>
         <label className={cx('title')}>
            Chemistry Lessons
        </label>
        <p className={cx('detail')}>
            Tham gia các bài học được thiết kế đơn giản nhưng hiệu quả
        </p>
       </div>
        <div className={cx('icon')}>
            <img src={BannerIcon} alt={'BannerIcon'}/>
        </div>
       </div>
    </div>
  )
}

export default Banner