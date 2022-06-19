import ShowInfo from './QuizInfo.js';
import Quiz from './Quiz.js'
import React, { useState } from 'react';

function Start(props) {
    const shuffle = (array) => {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    props.data.questions.forEach((_question, i) => shuffle(props.data.questions[i].answers));
    const handleStart = () => {
        setDisplay(<Quiz return={props.return} data={props.data} questions={shuffle(props.data.questions)}></Quiz>);
    }

    const [display, setDisplay] = useState(<ShowInfo data={props.data} return={props.return} start={handleStart}></ShowInfo>)

    return (
        <div>
            {display}
        </div>
    );
}

export default Start;