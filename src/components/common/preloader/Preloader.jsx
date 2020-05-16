import s from "./Preloader.module.css";
import loading from "../../../pictures/loading.png";
import React from "react";

let Preloader = (props) => {
    return (
        <div className={s.loadContainer}>
            <img src={loading} alt={"preloader"}/>
        </div>
    );
};

export default Preloader;