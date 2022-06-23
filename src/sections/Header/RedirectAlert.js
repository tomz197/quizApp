import './HeaderStyle.css'
import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Navigate } from 'react-router-dom';
import {QuizContext} from '../../QuizContext'


function AlertDialog(props) {
    // eslint-disable-next-line no-unused-vars
    const {quizStarted, setQuizStarted} = useContext(QuizContext);
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(props.element);

    const handleSend = () => {
        setOpen(false);
        setQuizStarted(false);
        setShow(<Navigate to={props.redirect} />)
    };

    return (
        <>
            <span onClick={() => setOpen(!open)}>
                {show}
            </span>
            <Dialog
                open={open}
                onClose={() => setOpen(!open)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"This action will end the quiz."}
                </DialogTitle>
                <DialogActions>
                    <Button variant="outlined" onClick={handleSend} autoFocus>
                        I understand
                    </Button>
                    <Button variant="contained" onClick={() => setOpen(!open)}>Back to quiz</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default AlertDialog;