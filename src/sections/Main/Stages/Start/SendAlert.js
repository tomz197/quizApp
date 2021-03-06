import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';


function AlertDialog(props) {
    const [open, setOpen] = useState(false);

    const handleSend = () => {
        setOpen(false);
        props.send(1)
    };

    return (
        <div>
            <Button disabled={props.disabled} variant="contained" onClick={() => setOpen(!open)}>
                send
            </Button>
            <Dialog
                open={open}
                onClose={() => setOpen(!open)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Do you want to end the quiz?"}
                </DialogTitle>
                <DialogActions>
                    <Button variant="outlined" onClick={handleSend} autoFocus>
                        Yes
                    </Button>
                    <Button variant="contained" onClick={() => setOpen(!open)}>No</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AlertDialog;