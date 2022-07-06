import React, { useState } from 'react'
import ClockLoader

 from "react-spinners/ClockLoader";



function Loading(props) {

    // for installing React spinner use== npm i react-spinners

    let [color, setColor] = useState("red");
    return (
        <div className="another-box">

            <div className="loading text-center">

                <ClockLoader


                    color={color} loading={props.loading} size={200}  />

            </div>
        </div>

    )
}

export default Loading