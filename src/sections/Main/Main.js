import "./MainStyle.css";
import React, { useState } from "react";
import Search from "./Stages/Search/Search.js";
import Start from "./Stages/Start/Start.js";

function Main() {
    const data = [
        {
            id: 0,
            title: "Math easy",
            description: "The easiest math quiz you can find.",
            timeForQuestion: true,
            time: 10,
            password: "",
            questions: [
                {
                    question: "2 + 2 =",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "9" },
                        { id: 1, answer: "1" },
                        { id: 2, answer: "4" },
                        { id: 3, answer: "22" },
                    ],
                    correctAnswersID: 2,
                },
                {
                    question: "7 - 3 =",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "4" },
                        { id: 1, answer: "10" },
                        { id: 2, answer: "3" },
                        { id: 3, answer: "7" },
                    ],
                    correctAnswersID: 0,
                },
                {
                    question: "15 - 9",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "4" },
                        { id: 1, answer: "24" },
                        { id: 2, answer: "6" },
                        { id: 3, answer: "9" },
                    ],
                    correctAnswersID: 2,
                },
                {
                    question: "2 + 8",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "11" },
                        { id: 1, answer: "10" },
                        { id: 2, answer: "6" },
                        { id: 3, answer: "9" },
                    ],
                    correctAnswersID: 1,
                },
                {
                    question: "6 + 9",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "6" },
                        { id: 1, answer: "15" },
                        { id: 2, answer: "69" },
                        { id: 3, answer: "96" },
                    ],
                    correctAnswersID: 1,
                },
                {
                    question: "0 + 0 - 0",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "100" },
                        { id: 1, answer: "2" },
                        { id: 2, answer: "10" },
                        { id: 3, answer: "0" },
                    ],
                    correctAnswersID: 3,
                },
                {
                    question: "1 - 2",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "-1" },
                        { id: 1, answer: "3" },
                        { id: 2, answer: "2" },
                        { id: 3, answer: "1" },
                    ],
                    correctAnswersID: 0,
                },
            ],
        },
        {
            id: 1,
            title: "Linux",
            description: "Take our quiz and find out how much you know about Linux and Ubuntu!",
            timeForQuestion: false,
            time: 300,
            password: "gargamel",
            questions: [
                {
                    question:
                        "Who spearheaded the project to create the Ubuntu operating system?",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "Steve Wozniak" },
                        { id: 1, answer: "Linus Torvalds" },
                        { id: 2, answer: "Mark Shuttleworth" },
                    ],
                    correctAnswersID: 2,
                },
                {
                    question: "What type of computer sparked Linus Torvalds' interest in computers when he was a kid?",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "Apple II" },
                        { id: 1, answer: "Commodore Vic-20" },
                        { id: 2, answer: "TI 99/4A" },
                    ],
                    correctAnswersID: 1,
                },
                {
                    question: "Which operating system did Torvalds learn about in college that inspired him to make his own?",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "DOS" },
                        { id: 1, answer: "AmigaOS" },
                        { id: 2, answer: "Unix" },
                    ],
                    correctAnswersID: 2,
                },
                {
                    question: "What operating system did Torvalds set out to improve before he decided to build Linux?",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "Unix" },
                        { id: 1, answer: "MINIX" },
                        { id: 2, answer: "Xenix" },
                    ],
                    correctAnswersID: 1,
                },
                {
                    question: "What is the GPL?",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "GNU Public License" },
                        { id: 1, answer: "Genera Project Limit" },
                        { id: 2, answer: "Global Processing List" },
                    ],
                    correctAnswersID: 0,
                },
                {
                    question: "What does open source mean?",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "Open-source software is free, meaning you can't charge anything for it." },
                        { id: 1, answer: "Open-source software is platform agnostic, meaning it can run on any operating system." },
                        { id: 2, answer: "Open-source software has freely available source code and allows for derived works." },
                    ],
                    correctAnswersID: 2,
                },
                {
                    question: "What do we call the combination of the Linux kernel with the system and application programs that make up an entire operating system?",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "versions" },
                        { id: 1, answer: "distributions" },
                        { id: 2, answer: "builds" },
                    ],
                    correctAnswersID: 1,
                },
                {
                    question: "When did Ubuntu launch?",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "1991" },
                        { id: 1, answer: "1999" },
                        { id: 2, answer: "2004" },
                    ],
                    correctAnswersID: 2,
                },
                {
                    question: "How frequently does Ubuntu update?",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "monthly" },
                        { id: 1, answer: "every six months" },
                        { id: 2, answer: "annually" },
                    ],
                    correctAnswersID: 1,
                },
                {
                    question: "Which Linux distribution was the basis for Ubuntu?",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "Debian" },
                        { id: 1, answer: "Fedora" },
                        { id: 2, answer: "CentOS" },
                    ],
                    correctAnswersID: 0,
                },
                {
                    question: "Which company finances Ubuntu?",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "Red Hat" },
                        { id: 1, answer: "Canonical Ltd" },
                        { id: 2, answer: "Palm" },
                    ],
                    correctAnswersID: 1,
                },
            ],
        },
        {
            id: 2,
            title: "Python",
            description: "Best python quiz you can find.",
            timeForQuestion: true,
            time: 25,
            password: "",
            questions: [
                {
                    question: "What is output of 33 == 33.0",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "False" },
                        { id: 1, answer: "True" },
                        { id: 2, answer: "33" },
                        { id: 3, answer: "None of the answers" },
                    ],
                    correctAnswersID: 1,
                },
                {
                    question: "Name the error that doesn’t cause program to stop/end, but the output is not the desired result or is incorrect.",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "Syntax error" },
                        { id: 1, answer: "Logical error" },
                        { id: 2, answer: "Runtime error" },
                        { id: 3, answer: "None of the answers" },
                    ],
                    correctAnswersID: 1,
                },
                {
                    question: "How can we check whether the object is instance of class or not. Let us consider an object O which is instance of class B.",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "B.isinstance(O)" },
                        { id: 1, answer: "O.isinstance(B)" },
                        { id: 2, answer: "isinstance(O,B)" },
                        { id: 3, answer: "isinstance(B,O)" },
                    ],
                    correctAnswersID: 2,
                },
                {
                    question: "Which among them will produce {'a', 'b', 'c'}?",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "Tuple(''abc'')" },
                        { id: 1, answer: "List(''abc'')" },
                        { id: 2, answer: "Set(''abac'')" },
                        { id: 3, answer: "None of the answers" },
                    ],
                    correctAnswersID: 3,
                },
                {
                    question: "Which among them is incorrect for set s={100,101,102,103}",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "Len(s)" },
                        { id: 1, answer: "Sum(s)" },
                        { id: 2, answer: "Print(s[3])" },
                        { id: 3, answer: "Max(s)" },
                    ],
                    correctAnswersID: 2,
                },
                {
                    question: "Select the correct option to draw a rectangle centred at 50,50 with width and height as 50, 70 respectively.",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "Canvas.create_rect(50,50,50,70)" },
                        { id: 1, answer: "Canvas.create_rect(50,70,50,50)" },
                        { id: 2, answer: "Canvas.create_rectangle(50,50,50,70)" },
                        { id: 3, answer: "Tkinter.create_rect(50,50,50,70)" },
                    ],
                    correctAnswersID: 2,
                },
                {
                    question: "Which module is used in python to create Graphics?",
                    type: "radio",
                    answers: [
                        { id: 0, answer: "Graphics" },
                        { id: 1, answer: "Tkinter" },
                        { id: 2, answer: "Canvas" },
                        { id: 3, answer: "Turtle" },
                    ],
                    correctAnswersID: 3,
                },
            ],
        },
    ];
    const handleStart = (id) => {
        if (id !== undefined) {
            setShow(<Start data={data[id]} return={handleStart}></Start>);
        } else setShow(search);
    };
    const search = <Search data={data} start={handleStart}></Search>;
    const [show, setShow] = useState(search);
    return <div className="Main">{show}</div>;
}

export default Main;
