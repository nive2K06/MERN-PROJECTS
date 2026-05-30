import React from "react";


function Bio() {
    const firstname = "Nivejidhan";
    const lastname = "Premkumaar";

    const element = React.createElement(
        "button",
        {
            className: "btn",
            onClick: () => alert("Good Morning!"),
        },
        "Welcome"
    );

    return (
        <div>
            {firstname}
            {lastname}
            {element}

        </div>
    );
}

export default Bio;
