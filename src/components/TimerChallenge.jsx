import {useState, useRef} from 'react'

export default function TimerChallenge({ title, targetTime }) {
    
    const [timesUp, setTimer] = useState(false);
    const [inChallenge, setInChallenge] = useState(false);

    let timeRef = useRef();
    function startTimer() {
        timeRef.current = setTimeout(() => {
            setTimer(true)
        }, targetTime * 1000)
        setInChallenge(true)
    }

    function stopTimer() {
        clearTimeout(timeRef.current)
        setTimer(false)
        setInChallenge(false)

    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            { timesUp && <p>You lost</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ?'s':''}
            </p>
            <p>
                <button onClick = {inChallenge ? stopTimer : startTimer}>
                    {inChallenge?'Stop Challenge':'Start Challenge'}
                </button>
            </p>
            <p className={inChallenge ? 'active': undefined}>
                {inChallenge ? 'Time is running...':'Timer inactive'}
            </p>
        </section>
    )
}