import './SearchStyle.css';
import Typography from '@mui/material/Typography';
import LockIcon from '@mui/icons-material/Lock';
import { grey } from '@mui/material/colors';
import {useState} from 'react';

function ProductRow(props) {
    const password = props.password !== '' && <LockIcon sx={{ color: grey[500] }}></LockIcon>;
    const [ripple, setRipple] = useState();

    const handleClick = (e) => {
        props.select(props.id, e);
        setRipple(<span className="ripple" onAnimationEnd={() => setRipple(undefined)} style={{left: e.clientX-e.target.offsetLeft, top: e.clientY-e.target.offsetTop+window.pageYOffset}}></span>);
    }
    
    return (
        <div className="quizRow" id={props.id} onClick={(e) => handleClick(e)}>
            <div>
                <Typography variant="h5" component="h4">
                    {props.title}
                </Typography>
                <Typography variant="caption" component="p">
                    {props.description}
                </Typography>
            </div>
            <div>{password}</div>
            {ripple}
        </div>
    );
}

export default ProductRow;