import React from "react";
//import necessary hooks required for the components
import { useState,useEffect } from "react";

//exporting the component
export const Text = () => {
    {/*Declaring the component with a state */}
    const [text,setText] = useState("");

    {/*Declaring the useEffect hook */}
    useEffect(() => {
        {/* Effect that is executed after the component is mounted*/}
        console.log("Component Mounted");

        {/*Effect after a the component is unmounted */}
        return () => {
            console.log("Component Unmounted");
        }

    },
    {/*This is an array that indicated whether the effect should be affected after updating the component */}
    [text]
    )
    return(
        <div>
            <input onChange={(event) => {
                setText(event.target.value);
            }}
            />
            <h1>{text}</h1>
        </div>
    )
}