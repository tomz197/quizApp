import ShowInfo from './ShowInfo.js';
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
    const handleStart = () => {
        setDisplay(<Quiz return={props.return} data={props.data} order={shuffle([...Array(props.data.questions.length).keys()])}></Quiz>);
    }
    const showInfo = <ShowInfo data={props.data} return={props.return} start={handleStart}></ShowInfo>
    const [display, setDisplay] = useState(showInfo)
    return (
        <div>
            {display}
        </div>
    );
}

export default Start;