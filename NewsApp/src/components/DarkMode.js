import React, { useState, useEffect } from 'react'
import "../components/Newsitem.css";

function DarkMode() {
    const [darkMode, setDarkMode] = useState(false);


    const toggleDarkMode = () => setDarkMode(darkMode ? false : true)
    useEffect(()=>{
        if(darkMode===true){
            
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
           
           
           
        }
        else{
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            
        }
    })
   



    return (
        <>
            <div class="form-check form-switch">
                <input onClick={toggleDarkMode} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            </div>
           

        </>
    )
}

export default DarkMode