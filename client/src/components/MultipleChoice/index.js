import React , {useState} from 'react'
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
let cx = classNames.bind(styles);

const MultipleContent = ({data}) => {
    const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [question,setQuestion] = useState(data);
  const maxSteps = question.length;
  
  const [value, setValue] = useState();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={cx('container')}>
       <Paper className={cx('choices-wrapper')}>
         <label className={cx('title')}>Câu hỏi {activeStep}</label>
         <Typography className={cx('typo')}>{question && question[activeStep]['question']}</Typography>
         <div className={cx('answer-section')}>
         <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label={`Câu A : ${question[activeStep]['A']}`} />
        <FormControlLabel value="male" control={<Radio />} label={`Câu B : ${question[activeStep]['B']}`} />
        <FormControlLabel value="sick" control={<Radio />} label={`Câu C : ${question[activeStep]['C']}`} />
        <FormControlLabel value="other" control={<Radio />} label={`Câu C : ${question[activeStep]['result']}`} />
      </RadioGroup>
    </FormControl>
         </div>


        <div className={cx('controller')}>
        <MobileStepper
      variant="progress"
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps-1}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
        </div>

       </Paper>
       
    </div>
  )
}

export default MultipleContent