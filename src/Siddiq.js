import React from "react";

class Siddiq extends React.Component {
    constructor() {
        super();
        console.warn("constructor checking")
    }
    render() {
        console.warn("rendor checking");
        return (
            <div>
                <h1>component did mount</h1>

            </div>
        );
    }
}

export default Siddiq;
