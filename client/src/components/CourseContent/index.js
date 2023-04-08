import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Paper } from "@mui/material";
import ExpectItem from "../ExpectItem";
import CourseAccordion from "../CourseAccordion";
import { scientist_working } from "../../assets/svg";
let cx = classNames.bind(styles);

const CourseContent = ({
  title = "Tìm hiểu về nguyên tố hóa học",
  description = "Trong bài viết này bạn sẽ tìm hiểu về lịch sử hình thành của khóa học đồng thời kiến thức căn bản về hóa học",
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={cx("container")}>
      <Paper className={cx("detail-course-wrapper")}>
        <div className={cx("title")}>
          <label>{title && title}</label>
          <p>{description}</p>
          <img src={scientist_working} className={cx('img')} alt="scientist"/>
        </div>
         
        <div className={cx("table")}>
          <div className={cx("title")}>Kiến thức chinh</div>
          <div className={cx("left")}>
           <ExpectItem name={'Knowledge'}/>
           <ExpectItem name={'Chemistry'}/>
          </div>
          <div className={cx("right")}>
          <ExpectItem name={'History'}/>
          <ExpectItem name={'History'}/>
          </div>
        </div>
        <div className={cx('list-item')}>
          <CourseAccordion handleChange={handleChange} expanded={expanded}/>
          
        </div>   
      </Paper>
    </div>
  );
};

export default CourseContent;
