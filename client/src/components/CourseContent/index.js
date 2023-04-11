import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Paper } from "@mui/material";
import ExpectItem from "../ExpectItem";
import CourseAccordion from "../CourseAccordion";
import { scientist_working } from "../../assets/svg";
import { useParams } from "react-router";
import axios from 'axios';
let config = {
  baseURL : "http://localhost:5000/api",
  withCredentials : true,
}

let cx = classNames.bind(styles);

const CourseContent = ({
}) => {
  const [expanded, setExpanded] = React.useState(false);
  const [course,setCourse] = useState();
  const handleChange = (panel) => (event, isExpanded) => {
    
    setExpanded(isExpanded ? panel : false);
  };
  const param = useParams();
  const id = param.id;
  const GetCourseData = async () => {
    try{
      const data = await axios.get("/course/get-all-lesson/"+id,config);
      setCourse(data['data']['lesson']);
      console.log(data['data']['lesson']);

    }catch(err){
      console.log(err);
    }
    
  }
  useEffect(()=>{
    GetCourseData();
  },[])
  return (
    <div className={cx("container")}>
      <Paper className={cx("detail-course-wrapper")}>
        <div className={cx("title")}>
          {/* <label>{title && title}</label>
          <p>{description && description}</p> */}
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
          <ExpectItem name={'OverLook'}/>
          </div>
        </div>
        <div className={cx('list-item')}>
          {course && course.map((item,i)=>{
            return <CourseAccordion handleChange={handleChange} key={i} expanded={expanded} name={item.name} id={item.LessonID} index={i} lessonID={id}/>
          })}
        </div>   
      </Paper>
    </div>
  );
};

export default CourseContent;
