import './StartStyle.css';
import ShowQuestion from "./DisplayQuestion.js";
import ShowResults from "./QuizResults.js";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendAlert from './SendAlert.js';

import {QuizContext} from '../../../../QuizContext'
import React, { useState, useEffect, useContext } from 'react';

function Quiz(props) {
    // eslint-disable-next-line no-unused-vars
    const {quizStarted, setQuizStarted} = useContext(QuizContext);
    const data = props.data;
    
    const questions = props.questions;
    const [answers, setAnswers] = useState(new Array(questions.length).fill(undefined));
    
    const [timer, setTimer] = useState(data.time);
    const [showResult, setShowResult] = useState(false);
    
    const [orderIndex, setOrderIndex] = useState(0);

    const moveQuestion = (x) => {
        if (orderIndex + x < 0 || orderIndex + 1 + x > questions.length) {
            if (orderIndex + 1 + x > questions.length)
                {
                    setQuizStarted(false);
                    setShowResult(true);
                }
            return;
        }
        if (data.timeForQuestion) {
            setTimer(data.time);
        }
        setOrderIndex(orderIndex + x);
    }

    const handleTime = () => {
        if (data.timeForQuestion && orderIndex + 1 < questions.length) {
            moveQuestion(1);
            return;
        } else if (orderIndex + 1 >= questions.length) {
            setQuizStarted(false);
            setShowResult(true);
        }
    }

    const handleAnswerSelection = (select) => {
        let newAnswers = [...answers];
        newAnswers[orderIndex] = select;
        setAnswers(newAnswers);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer <= 1) {
                handleTime();
                return;
            }
            setTimer(timer - 1);
        }, 1000);

        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timer]);
    return (
        <div>
            {showResult ?
                <ShowResults return={props.return} questions={data.questions} answers={answers}></ShowResults> :
                <ShowQuestion selected={answers[orderIndex]} {...data.questions[orderIndex]} time={timer} select={handleAnswerSelection}></ShowQuestion>}
            {!showResult &&
                <Stack className="quizNavButtons" direction="row" justifyContent="space-between">
                    <Typography variant="h5" component="p" ml={0} align="center">{orderIndex + 1}/{questions.length}</Typography>
                    <Stack direction="row" spacing={1} justifyContent="center">
                        {!props.data.timeForQuestion && orderIndex !== 0 && <Button variant="outlined" onClick={() => moveQuestion(-1)}>Prev</Button>}
                        {orderIndex + 1 !== questions.length ? 
                        <Button disabled={answers[orderIndex]===undefined&&data.timeForQuestion ? true : false} variant="contained" onClick={() => moveQuestion(1)}>Next</Button> :
                        <SendAlert disabled={answers[orderIndex]===undefined&&data.timeForQuestion ? true : false} send={moveQuestion}></SendAlert>}
                    </Stack>
                </Stack>}
        </div >
    );
}
export default Quiz;