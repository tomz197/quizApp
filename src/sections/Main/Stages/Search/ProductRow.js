import './SearchStyle.css';
import Typography from '@mui/material/Typography';
import LockIcon from '@mui/icons-material/Lock';
import { grey } from '@mui/material/colors';

function ProductRow(props) {

    let password = props.password !== '' ? <LockIcon sx={{ color: grey[500] }}></LockIcon> : "";

    return (
        <div className="quizRow" id={props.id} onClick={(e) => props.select(props.id, e)}>
            <div>
                <Typography variant="h5" component="h4">
                    {props.title}
                </Typography>
                <Typography variant="caption" component="p">
                    {props.description}
                </Typography>
            </div>
            <div>{password}</div>
        </div>
    );
}

export default ProductRow;