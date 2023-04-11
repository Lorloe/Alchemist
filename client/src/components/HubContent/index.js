import React,{useState,useEffect} from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Banner from '../Banner';
import CourseHolder from '../CourseHolder';
import { BannerIcon } from '../../assets/png';
import axios from 'axios';
let config = {
  baseURL : "http://localhost:5000/api",
  withCredentials : true,
}
let cx = classNames.bind(styles);

const HubContent = () => {
  const [courses,setCourse] = useState();
  const GetCourses = async () => {
    try{
         const data = await axios.get("/course/get-all-course",config);
         setCourse(data['data']);
         console.log(data);
    }catch(err){
        console.log(err);
    }
 }
 useEffect(()=>{
   GetCourses();
 },[])
  return (
    <div className={cx('container')}>
      <Banner color={'blue'} img={BannerIcon} title={'Chemistry Lesson'} description={'Khóa học hóa nhanh và hiệu quả'}/>
     { courses &&  courses.map((item)=>{
          return <CourseHolder type={'novice'} name={item.name} id={item._id} title={'Novice wizard'}/>
     }) }
      <CourseHolder type={'intermediate'} title={'Intermediate Alchemist'} />
    </div>
  )
}

export default HubContent;