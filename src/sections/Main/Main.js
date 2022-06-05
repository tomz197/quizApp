import './MainStyle.css';
import React, { useState } from 'react';
import Search from './Stages/Search/Search.js';
import Start from './Stages/Start/Start.js';


function Main() {
    const data =
        [
            {
                id: 0,
                title: 'Math easy',
                description: 'The easiest math quiz you can find.',
                timeForQuestion: true,
                time: 10,
                password: '',
                questions: [
                    {
                        question: '2 + 2 =',
                        type: 'radio',
                        answers: [
                            { id: 0, answer: '9' },
                            { id: 1, answer: '1' },
                            { id: 2, answer: '4' },
                            { id: 3, answer: '22' },
                        ],
                        correctAnswersID: 2
                    },
                    {
                        question: '7 - 3 =',
                        type: 'radio',
                        answers: [
                            { id: 0, answer: '4' },
                            { id: 1, answer: '10' },
                            { id: 2, answer: '3' },
                            { id: 3, answer: '7' },
                        ],
                        correctAnswersID: 0
                    },
                    {
                        question: '15 - 9',
                        type: 'radio',
                        answers: [
                            { id: 0, answer: '4' },
                            { id: 1, answer: '24' },
                            { id: 2, answer: '6' },
                            { id: 3, answer: '9' },
                        ],
                        correctAnswersID: 2
                    },
                    {
                        question: '2 + 8',
                        type: 'radio',
                        answers: [
                            { id: 0, answer: '11' },
                            { id: 1, answer: '10' },
                            { id: 2, answer: '6' },
                            { id: 3, answer: '9' },
                        ],
                        correctAnswersID: 1
                    },
                    {
                        question: '6 + 9',
                        type: 'radio',
                        answers: [
                            { id: 0, answer: '6' },
                            { id: 1, answer: '15' },
                            { id: 2, answer: '69' },
                            { id: 3, answer: '96' },
                        ],
                        correctAnswersID: 1
                    },
                    {
                        question: '0 + 0 - 0',
                        type: 'radio',
                        answers: [
                            { id: 0, answer: '100' },
                            { id: 1, answer: '2' },
                            { id: 2, answer: '10' },
                            { id: 3, answer: '0' },
                        ],
                        correctAnswersID: 3
                    },
                    {
                        question: '1 - 2',
                        type: 'radio',
                        answers: [
                            { id: 0, answer: '-1' },
                            { id: 1, answer: '3' },
                            { id: 2, answer: '2' },
                            { id: 3, answer: '1' },
                        ],
                        correctAnswersID: 0
                    },
                ]
            },
            {
                id: 1,
                title: 'ever',
                description: 'This is some amazing quiz.',
                timeForQuestion: false,
                time: 600,
                password: 'password',
                questions: [
                    {
                        question: 'one',
                        type: 'radio',
                        answers: [
                            { id: 0, answer: 'it will' },
                            { id: 1, answer: 'it won\'t' },
                            { id: 2, answer: 'maybe a part' },
                            { id: 3, answer: 'i have no idea' },
                        ],
                        correctAnswersID: 2
                    },
                    {
                        question: '444444wing?',
                        type: 'radio',
                        answers: [
                            { id: 0, answer: 'it will' },
                            { id: 1, answer: 'it won\'t' },
                            { id: 2, answer: 'maybe a part' },
                            { id: 3, answer: 'i have no idea' },
                        ],
                        correctAnswersID: 2
                    },
                    {
                        question: 'two',
                        type: 'radio',
                        answers: [
                            { id: 0, answer: 'it will' },
                            { id: 1, answer: 'it won\'t' },
                            { id: 2, answer: 'maybe a part' },
                            { id: 3, answer: 'i have no idea' },
                        ],
                        correctAnswersID: 2
                    },
                    {
                        question: '333333',
                        type: 'radio',
                        answers: [
                            { id: 0, answer: 'it will' },
                            { id: 1, answer: 'it won\'t' },
                            { id: 2, answer: 'maybe a part' },
                            { id: 3, answer: 'i have no idea' },
                        ],
                        correctAnswersID: 2
                    }
                ]
            },
            {
                id: 2,
                title: 'anytime',
                description: 'This is some amazing quiz.',
                timeForQuestion: false,
                time: 600,
                password: '',
                questions: [
                    {
                        question: 'will this be working?',
                        type: 'radio',
                        answers: [
                            { id: 0, answer: 'it will' },
                            { id: 1, answer: 'it won\'t' },
                            { id: 2, answer: 'maybe a part' },
                            { id: 3, answer: 'i have no idea' },
                        ],
                        correctAnswersID: 2
                    }
                ]
            },
            {
                id: 3,
                title: 'anytime',
                description: 'This is some amazing quiz.',
                timeForQuestion: false,
                time: 600,
                password: '',
                questions: [
                    {
                        question: 'will this be working?',
                        type: 'radio',
                        answers: [
                            { id: 0, answer: 'it will' },
                            { id: 1, answer: 'it won\'t' },
                            { id: 2, answer: 'maybe a part' },
                            { id: 3, answer: 'i have no idea' },
                        ],
                        correctAnswersID: 2
                    }
                ]
            },
            {
                id: 4,
                title: 'anytime',
                description: 'This is some amazing quiz.',
                timeForQuestion: false,
                time: 600,
                password: '',
                questions: [
                    {
                        question: 'will this be working?',
                        type: 'radio',
                        answers: [
                            { id: 0, answer: 'it will' },
                            { id: 1, answer: 'it won\'t' },
                            { id: 2, answer: 'maybe a part' },
                            { id: 3, answer: 'i have no idea' },
                        ],
                        correctAnswersID: 2
                    }
                ]
            },
            {
                id: 5,
                title: 'anytime',
                description: 'This is some amazing quiz.',
                timeForQuestion: false,
                time: 600,
                password: '',
                questions: [
                    {
                        question: 'will this be working?',
                        type: 'radio',
                        answers: [
                            { id: 0, answer: 'it will' },
                            { id: 1, answer: 'it won\'t' },
                            { id: 2, answer: 'maybe a part' },
                            { id: 3, answer: 'i have no idea' },
                        ],
                        correctAnswersID: 2
                    }
                ]
            },
            {
                id: 6,
                title: 'anytime',
                description: 'This is some amazing quiz.',
                timeForQuestion: false,
                time: 600,
                password: '',
                questions: [
                    {
                        question: 'will this be working?',
                        type: 'radio',
                        answers: [
                            { id: 0, answer: 'it will' },
                            { id: 1, answer: 'it won\'t' },
                            { id: 2, answer: 'maybe a part' },
                            { id: 3, answer: 'i have no idea' },
                        ],
                        correctAnswersID: 2
                    }
                ]
            },
            {
                id: 7,
                title: 'anytime',
                description: 'This is some amazing quiz.',
                timeForQuestion: false,
                time: 600,
                password: '',
                questions: [
                    {
                        question: 'will this be working?',
                        type: 'radio',
                        answers: [
                            { id: 0, answer: 'it will' },
                            { id: 1, answer: 'it won\'t' },
                            { id: 2, answer: 'maybe a part' },
                            { id: 3, answer: 'i have no idea' },
                        ],
                        correctAnswersID: 2
                    }
                ]
            },
            {
                id: 8,
                title: 'anytime',
                description: 'This is some amazing quiz.',
                timeForQuestion: false,
                time: 600,
                password: '',
                questions: [
                    {
                        question: 'will this be working?',
                        type: 'radio',
                        answers: [
                            { id: 0, answer: 'it will' },
                            { id: 1, answer: 'it won\'t' },
                            { id: 2, answer: 'maybe a part' },
                            { id: 3, answer: 'i have no idea' },
                        ],
                        correctAnswersID: 2
                    }
                ]
            }
        ]
    const handleStart = (id) => {
        if (id !== undefined) {
            setShow(<Start data={data[id]} return={handleStart}></Start>);
        } else setShow(search);
    }
    const search = <Search data={data} start={handleStart}></Search>
    const [show, setShow] = useState(search);
    return (
        <div className="Main">
            {show}
        </div>
    );
}

export default Main;