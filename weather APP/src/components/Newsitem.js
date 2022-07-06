import React from "react";
import "../components/Newsitem.css";

function Newsitem({ title, img, desc, url,publish,loading }) {
    return (
        <div className="hero-box">
            <div className="box-container" >
                <div className="box">
                <div className="author">
                       <button>{publish}</button>
                    </div>
                    <div className="img-box text-center">
                        
                        {img === null ? (
                            <img src="https://bitsofco.de/content/images/2018/12/broken-1.png" />
                        ) : (
                            <img src={img} alt="" />
                        )}
                        
                    </div>

                    <div className="title_descbox">
                        <strong>{title}</strong>
                        <p>{desc}</p>
                    </div>

                    <button className="read-btn ">
                        <a href={url} target={"_blank"}>
                            Read More
                        </a>
                    </button>
                   
                </div>
            </div>
        </div>
    );
}

export default Newsitem;
