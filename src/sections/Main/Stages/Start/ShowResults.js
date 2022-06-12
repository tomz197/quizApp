import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ReactCanvasConfetti from "react-canvas-confetti";
import './StartStyle.css'
import React, { useRef, useCallback, useEffect } from "react";

const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
};

function ShowResults(props) {
    const refAnimationInstance = useRef(null);

    const getInstance = useCallback((instance) => {
        refAnimationInstance.current = instance;
    }, []);

    const makeShot = useCallback((particleRatio, opts) => {
        refAnimationInstance.current &&
            refAnimationInstance.current({
                ...opts,
                origin: { y: .75 },
                particleCount: Math.floor(200 * particleRatio)
            });
    }, []);

    const fire = useCallback(() => {
        makeShot(0.25, {
            spread: 26,
            startVelocity: 55
        });

        makeShot(0.2, {
            spread: 60
        });

        makeShot(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        });

        makeShot(0.1, {
            spread: 120,
            startVelocity: 45
        });
    }, [makeShot]);
    let points = 0;
    props.order.forEach((answ, i) => {
        if (props.questions[answ].correctAnswersID === props.answers[i])
            points += 1;
    })
    useEffect(() => fire(), [fire])
    return (
        <div className="ShowResults">
            <Typography variant="h3" component="h4" align="center">Results</Typography>
            <Typography onClick={fire} className="percent" variant="h2" component="h5" align="center" color="primary.main">{(points / props.order.length * 100).toFixed(1)}%</Typography>
            <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
            <p><strong>Points: </strong>{points}/{props.order.length}</p>
            <Stack direction="row" spacing={1} justifyContent="center">
                <Button variant="contained" onClick={() => props.return()}>Back to start</Button>
            </Stack>
        </div>
    );
}

export default ShowResults;