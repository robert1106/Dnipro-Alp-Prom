import React, {Component} from "react";

import './block-six.css'

export default function BlockSix({lang, setShowModal}) {
    return (
        <>
            <div className="block-six" id="block-6">
                <div className="container block-six-container">
                    <div className="wrap-right">
                        <h2 className="wrap-right-header">{lang === "ua"
                            ? "У Вас виникло питання?"
                            : "У Вас возник вопрос?"}
                        </h2>
                        <p className="wrap-right-paragraph">{lang === "ua"
                            ? "Не поспішайте писати в службу підтримки. Подивіться, може відповідь на Ваше питання написаний нижче?"
                            : "Не спешите писать в службу поддержки. Посмотрите, может ответ на Ваш вопрос написан ниже?"}
                        </p>
                        <span className="wrap-right-faq">FAQ</span>
                    </div>
                    <div className="wrap-left">
                        <button className="block-btn block-six-btn"
                                onClick={() => {
                                    setShowModal({callback: true, faq: true});
                                }}>
                            <span className="btn-text">{lang === "ua"
                                ? "Задати питання"
                                : "Задать вопрос"}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}