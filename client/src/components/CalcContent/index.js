import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Paper } from '@mui/material';
import { scientist_working2 } from '../../assets/svg';
import CalcHolder from '../CalcHolder';
import Banner from '../Banner';
import CalcAtom from '../CalcAtom';
let cx = classNames.bind(styles);

const CalcContent = () => {
  return (
    <div className={cx('container')}>
        <Banner color={'blue'} img={scientist_working2} title={'Calculator'} description={'Công cụ tính toán hóa học'}/>
        <CalcHolder/>
        {/* <CalcAtom/> */}
    </div>
  )
}

export default CalcContent