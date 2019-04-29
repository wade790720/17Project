import "../src/assets/style.sass"

import React from 'react';
import ReactDOM from "react-dom";
import Button from "components/Button";

const Application = () => {
    return (
        <article>
            <Button text="Test"/>
        </article>
    );
};

ReactDOM.render(
    <Application />,
    document.getElementById("wrapper")
);