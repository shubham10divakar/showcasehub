import React from "react";

function displayVideo(props){
    console.log(props.file)
    return <video src={props.file} autoPlay muted loop />;
}

export default displayVideo