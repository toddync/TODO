import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Clock = ({ setShowModal }) => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    useEffect(() => {
        let now = new Date();
        setSeconds(now.getSeconds() + now.getMilliseconds() / 1000);
        setMinutes(now.getUTCMinutes());
        setHours(now.getHours());

        setInterval(() => {
            setSeconds(() => {
                let now = new Date();
                return now.getSeconds() + now.getMilliseconds() / 1000;
            });
        }, 100);

        setInterval(() => {
            let now = new Date();
            setSeconds(now.getSeconds() + now.getMilliseconds() / 1000);
            setMinutes(now.getUTCMinutes());
            setHours(now.getHours());
        }, 60000);
    }, []);

    useEffect(() => {
        let now = new Date();
        setMinutes(() => now.getMinutes() + seconds / 60);
    }, [seconds]);

    useEffect(() => {
        let now = new Date();

        setHours(() => now.getHours() + minutes / 60);
    }, [minutes]);

    useEffect(() => {
        document.querySelector(".seconds").style.rotate = `${6 * seconds}deg`;
        document.querySelector(".minutes").style.rotate = `${6 * minutes}deg`;
        document.querySelector(".hours").style.rotate = `${30 * hours}deg`;
    }, [hours, minutes, seconds]);

    return (
        <div className="container">
            <div className="clock">
                <div className="hand hours"></div>
                <div className="hand minutes"></div>
                <div className="hand seconds"></div>
                <div className="point"></div>
                <div className="marker">
                    <span className="marker__1"></span>
                    <span className="marker__2"></span>
                    <span className="marker__3"></span>
                    <span className="marker__4"></span>
                </div>
            </div>
            <h2>
                {hours > 10 ? Math.floor(hours) : `0${Math.floor(hours)}`}:
                {minutes > 10 ? Math.floor(minutes) : `0${Math.floor(minutes)}`}
                :
                {seconds > 10 ? Math.floor(seconds) : `0${Math.floor(seconds)}`}
            </h2>
            <span
                className="icon"
                onClick={() => setShowModal(true)}>
                <div className="icon__settings">
                    <ion-icon name="add" />
                </div>
            </span>
        </div>
    );
};

export default Clock;
