import React from "react";

import Jay from "./task/jay";

export default class Application extends React.Component {

    render(){
        return(
        <>
            <h3>This is from Application component.</h3>
            <Jay />
        </>)
    }
}