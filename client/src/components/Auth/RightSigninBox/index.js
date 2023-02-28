import React from 'react'
import styles from './styles.module.scss';
import { faUser ,faLock , faAt} from '@fortawesome/free-solid-svg-icons'
import CustomInput from '../../CustomInput';
import classNames from 'classnames/bind';
let cx = classNames.bind(styles);


const RightSigninBox = () => {
  return (
    <div className={cx('right-card')}>
            <p>Already have an account ? <i>Sign In</i></p>
            <CustomInput title="Username" placeholder="myusername " className={cx('input')} icon={faUser}/>
            <CustomInput title="Password" placeholder="mypassword " className={cx('input')} icon={faLock}/>
            <CustomInput title="Email" placeholder="myemail@ " className={cx('input')} icon={faAt}/>
            <button className={cx('btn')}>Register</button>
        </div> 
  )
}

export default RightSigninBox