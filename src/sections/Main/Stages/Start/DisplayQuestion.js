import './StartStyle.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';


function ShowQuestion(props) {
    const showResult = props.showResult === undefined ? false : true;
    let questions;
    if (props.type === 'radio') {
        let inner = []

        props.answers.forEach(answer => {
            let className = "";
            let background_color = "";
            if (showResult) {
                className = "notInteractable "
                className += answer.id===props.correctAnswersID||props.selected===answer.id ? "selectedResult" : "";
                background_color = answer.id===props.correctAnswersID && "success.main";
                background_color = props.selected!==props.correctAnswersID&&props.selected===answer.id ? "error.main" : background_color;
                
                inner.push(<FormControlLabel className={className} sx={{bgcolor: background_color}} key={answer.id}
                    value={answer.id}
                    control={<Radio checked={props.selected === answer.id} />} label={answer.answer} />)
            }else inner.push(<FormControlLabel key={answer.id}
                onClick={() => props.select(answer.id)} value={answer.id}
                control={<Radio checked={props.selected === answer.id} />} label={answer.answer} />)
        });
        questions = <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name={props.question}
            className="answerOption"
        >{inner}</RadioGroup>
    }
    return (
        <div className="showQuestion">
            {!showResult && <Typography variant="h3" component="h4" align="center">
                {Math.floor(props.time / 60) < 10 && '0'}{Math.floor(props.time / 60)}:
                {props.time % 60 < 10 && '0'}{props.time % 60}</Typography>}
            <Typography my={1} pb={1} variant="h6" component="p">{props.question}</Typography>
            {questions}
        </div>
    );
}

export default ShowQuestion;