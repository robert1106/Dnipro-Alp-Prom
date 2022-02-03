import React from "react";

import './button-callback.css'

export default function ButtonCallback({lang}) {

    function clickBtn() {
        console.log("Open modal");
    }

    return (
        <>
            <button className="block-btn callback-btn"
                    onClick={clickBtn}>
                        <span className="btn-text">{
                            lang === "ua"
                                ? "Зв'язатися з нами"
                                : "Связаться с нами"}
                        </span>
            </button>
        </>
    )
}