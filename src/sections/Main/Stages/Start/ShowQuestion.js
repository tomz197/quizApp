import './StartStyle.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';


function ShowQuestion(props) {
    let questions;
    if (props.type === 'radio') {
        let inner = []

        props.answers.forEach(answer => {
            inner.push(<FormControlLabel key={answer.id}
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
            <Typography variant="h3" component="h4" align="center">
                {Math.floor(props.time / 60) < 10 ? '0' : ''}{Math.floor(props.time / 60)}:
                {props.time % 60 < 10 ? '0' : ''}{props.time % 60}</Typography>
            <Typography my={1} pb={1} variant="h6" component="p">{props.question}</Typography>
            {questions}
        </div>
    );
}

export default ShowQuestion;