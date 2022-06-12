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
                        <Button variant="contained" href="https://github.com/tomz197" target="_blank">Github</Button>
                        <Button variant="contained" href="https://www.instagram.com/tom_z__/" target="_blank">
                            Instagram
                        </Button>
                    </Stack>
                </div>
            </div>
        </footer>
    );
}

export default Footer;