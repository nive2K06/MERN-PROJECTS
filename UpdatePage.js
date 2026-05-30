import React from "react";
import { useEffect, useState } from "react";

function Time() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    

    useEffect(() => {
        const Timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(Timer);
    }, []);


    return (
        <div>
            <h1>welcome to the Timezone</h1>
            <p>
                Current Time: {currentTime}
            </p>
        </div>

    );
}

export default Time;
