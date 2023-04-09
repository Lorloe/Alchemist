import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Paper , TextField ,Button } from "@mui/material";

let cx = classNames.bind(styles);

const UserInfo = () => {
  return (
    <div className={cx("container")}>
      <Paper className={cx("user-section")}>
           <TextField variant="standard" label="@nickname" id="nickname" className={cx('input')}></TextField>
           <TextField variant="standard" label="@email" id="nickname" className={cx('input')}></TextField>
           <TextField variant="standard" id="nickname" className={cx('input')} type="date"></TextField>
           <TextField variant="standard" id="nickname" className={cx('input')} type="number"></TextField>
           <div></div>
           <div className={cx('interact')}>
               <Button>Confirm</Button>
               <Button>Cancel</Button>
           </div>
      </Paper>
    </div>
  );
};

export default UserInfo;
