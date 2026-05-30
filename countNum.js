import React from "react";
import { useEffect, useState } from "react";

function Count() {
    const [count, setCount] = useState(0);


    useEffect(() => {
        const countTimer = setInterval(() => {
            setCount(count => count + 1);
        }, 1000);

        return () => clearInterval(countTimer);
    }, []);


    return (
        <div>

            <p>
                count:{count}
            </p>
        </div>

    );
}

export default Count;
