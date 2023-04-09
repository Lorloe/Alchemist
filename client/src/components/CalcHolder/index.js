import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Paper } from '@mui/material';
let cx = classNames.bind(styles);

const CalcHolder = () => {
  return (
    <div className={cx('container')}>
        <div className={cx('feature-wrapper')}>
        <label>Công cụ</label>
        <div className={cx('list-item')}>
             <Paper elevation={2} className={cx('item')}>
                   <label>Atom Calculator</label>
             </Paper>
             <Paper elevation={2} className={cx('item')}>
                   <label>Atomic Mass Calculator</label>
             </Paper>
             <Paper elevation={2} className={cx('item')}>
                   <label>Electron Configuration</label>
             </Paper>
        </div>
        </div>
    </div>
  )
}

export default CalcHolder