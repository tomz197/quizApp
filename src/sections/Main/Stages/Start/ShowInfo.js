import './StartStyle.css'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';


function ShowInfo(props) {
    const data = props.data;
    const [email, setEmail] = useState('');
    const [wrongEmail, setWrongEmail] = useState(false);
    const [password, setPassword] = useState('');
    const [wrongPassword, setWrongPassword] = useState(false);

    const handleStart = () => {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (password === data.password) {
            if (email === '') {
                props.start();
                return;
            }
            if (regex.test(email)) {
                props.start();
            } else setWrongEmail(true);
        } else {
            setWrongPassword(true);
        }
    }

    return (
        <div className="showInfo">
            <Typography variant="h3" component="h4" align="center">{data.title}</Typography>
            <p>{data.description}</p>
            <p><strong>Number of questions:</strong> {data.questions.length}</p>
            <p><strong>{data.timeForQuestion ? 'Time for question' : 'Time for quiz'}: </strong>
                {Math.floor(data.time / 60) !== 0 ? `${Math.floor(data.time / 60)}min` : ''} {data.time % 60 !== 0 ? `${data.time % 60}s` : ''}</p>
            <TextField
                error={wrongEmail}
                margin="dense"
                fullWidth
                label="Email"
                type="email"
                value={email}
                autoComplete="current-email"
                onChange={e => { setEmail(e.target.value); setWrongEmail(false); }}
            />
            {data.password !== '' ? <TextField
                error={wrongPassword}
                margin="dense"
                fullWidth
                label="Password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setWrongPassword(false); }}
            /> : ""}
            <Stack direction="row" spacing={1} justifyContent="center">
                <Button variant="outlined" onClick={() => props.return(undefined)}>Return</Button>
                <Button variant="contained" onClick={() => handleStart()}>Start</Button>
            </Stack>
        </div>
    );
}

export default ShowInfo;