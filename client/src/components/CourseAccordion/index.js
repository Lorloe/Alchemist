import React from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
let cx = classNames.bind(styles);
const CourseAccordion = ({handleChange,expanded,index,name,lessonID}) => {
   const Navigate = useNavigate();
  return (
    <div className={cx('container')}>
    <Accordion expanded={expanded === index} onChange={handleChange(index)}>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1bh-content"
      id="panel1bh-header"
    >
      <Typography sx={{ width: '33%', flexShrink: 0 }}>
        Lesson {index+1}
      </Typography>
      <Typography sx={{ color: 'text.secondary' }}>0%</Typography>
    </AccordionSummary>
    <AccordionDetails className={cx('detail')}>
      <Typography>
        {name}
      </Typography>
       <Button onClick={()=>{
         Navigate('/lesson'+"/"+lessonID+"/"+index);
       }}>GO</Button>
    </AccordionDetails>
  </Accordion>
  </div>
  )
}

export default CourseAccordion