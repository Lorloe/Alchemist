import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import CourseContent from "../../components/CourseContent";
import Sidebar from "../../components/Sidebar";
import axios from 'axios';
let config = {
  baseURL : "http://localhost:5000/api",
  withCredentials : true,
}
let cx = classNames.bind(styles);

const Course = () => {
  return (
    <div className={cx("container")}>
      <Sidebar lbl={'course'} />
      <CourseContent />
    </div>
  );
};

export default Course;
