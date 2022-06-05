import './FooterStyle.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function Footer() {
    return (
        <footer>
            <div>
                <div className="personal">
                    <h4>Tomáš Žifčák</h4>
                    <p>+421 944 995 915</p>
                    <p>tomas.zifcak197@gmail.com</p>
                </div>
                <div className="social">
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained">Github</Button>
                        <Button variant="contained" href="#contained-buttons">
                            Instagram
                        </Button>
                    </Stack>
                    {/* <ul>
                        <li><a href="https://github.com/tomz197">Github</a></li>
                        <li><a href="https://www.instagram.com/tom_z__/">Instagram</a></li>
                    </ul> */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;