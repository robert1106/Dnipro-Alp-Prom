import React from "react";

import './button-callback.css'

export default function ButtonCallback({lang, onClick}) {
    return (
        <>
            <button className="block-btn callback-btn"
                    onClick={onClick}>
                        <span className="btn-text">{
                            lang === "ua"
                                ? "Зв'язатися з нами"
                                : "Связаться с нами"}
                        </span>
            </button>
        </>
    )
}