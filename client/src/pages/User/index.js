import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import Sidebar from "../../components/Sidebar";
import UserContent from "../../components/UserContent";
import axios from "axios";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from "@mui/material";
let config = {
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
};
let cx = classNames.bind(styles);

const User = () => {
  const [user, setUser] = useState();
  const [open, setOpen] = useState(false);

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };
  const GetUser = async () => {
    try {
      const user = await axios.get(
        "/user/get-user",
        config
      );
       
      setUser(user["data"]);
    } catch (err) {
       console.log(err);
    }
  };
  useEffect(() => {
    GetUser();
  }, []);

 const SendData = async (data) => {
    try{
      await axios.post('/user/update-user-user',data,config);
      handleDialogOpen();
    }catch(err){

    }
 }
  return (
    <div className={cx("container")}>
      <Sidebar />
     {user && <UserContent user={user} SendData={SendData} /> }
     <Dialog
        open={open}
        onClose={handleDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"User Update"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Profile của bạn được cập nhập thành công
          </DialogContentText>
        </DialogContent>
        <DialogActions>
       
          <Button onClick={handleDialogClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default User;
