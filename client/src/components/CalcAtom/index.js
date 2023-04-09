import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import RecyclingIcon from '@mui/icons-material/Recycling';
import { Paper, TextField , Link} from '@mui/material';

let cx = classNames.bind(styles);

const CalcAtom = () => {
  return (
    <div className={cx('container')}>
        <div className={cx('feature-wrapper')}>
        <label>Công cụ</label>
        <div className={cx('calc-grid')}>
            <div className={cx('atom-area')}>
            <Paper className={cx('form-atom')} >
                  <TextField className={cx('input')} variant='standard' label='Atomic number' fullWidth/>
                  <TextField className={cx('input')} variant='standard' label='Max-number' fullWidth/>
                  <TextField className={cx('input')} variant='standard' label='Charge'fullWidth/>
                  <div className={cx('submit')}>
                          <RecyclingIcon className={cx('btn')} />
                  </div>
            </Paper>   
            </div>
            <div className={cx('composition-area')}>
            <Paper className={cx('form-atom')} >
                  <TextField className={cx('input')} variant='standard' label='Number of protons' fullWidth/>
                  <TextField className={cx('input')} variant='standard' label='Number of neutrons' fullWidth/>
                  <TextField className={cx('input')} variant='standard' label='Number of electrons' fullWidth/>
            </Paper>   
            </div>
            <div className={cx('info-area')}>
                 <label>Atom Calculator</label>
                 <p>The atom calculator is a tool for calculating the atomic number and the mass number based on the number of atom components - protons, neutrons, and electrons (or vice versa). In addition, you can define the charge of ions with known numbers of protons and electrons. </p>
                 <div className={cx('table-preference')}>
                     <label>More info</label>
                     <Link href="#" underline="hover">What is an atom ?</Link>
                     <Link href="#" underline="hover">Atomic number , Atomic mass?</Link>
                     <Link href="#" underline="hover">How to calculate the atomic number, mass and charge?</Link>
                 </div>
            </div>
            <div className={cx('result-area')}>
                   <label className={cx('element')}>Your Element is Hydrogen</label>
            </div>
        </div>
        </div>
    </div>
  ) 
}

export default CalcAtom