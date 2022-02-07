import React, {Component} from "react";

import './footer.css'
import logoFooter from './logo-footer.svg'

export default function Footer({lang}) {
    return (
        <>
            <div className="footer" id="block-6">
                <div className="container column-list">
                    <div className="column-item">
                        <p>{lang === "ua"
                            ? "© Компанія промислового альпінізму"
                            : "© Компания промышленного альпинизма"}
                        </p>
                        <p>{lang === "ua"
                            ? "Висотні роботи / Верхолазні роботи"
                            : "Высотные работы / Верхолазные работы"}
                        </p>
                        <p>{lang === "ua"
                            ? "Промислові роботи"
                            : "Промышленные работы"}
                        </p>
                        <p>{lang === "ua"
                            ? "Промислові альпіністи"
                            : "Промышленные альпинисты"}
                        </p>
                    </div>
                    <div className="column-item">
                        <p>{lang === "ua"
                            ? "Графік роботи Call-центру"
                            : "График работы Call-центра"}
                        </p>
                        <p>{lang === "ua"
                            ? "У будні дні з 8 до 21"
                            : "В будние дни с 8 до 21"}
                        </p>
                        <p>{lang === "ua"
                            ? "Субота з 9 до 20"
                            : "Суббота с 9 до 20"}
                        </p>
                        <p>{lang === "ua"
                            ? "Неділя з 10 до 19"
                            : "Воскресенье с 10 до 19"}
                        </p>
                    </div>
                    <div>
                        <p>+38 (099) 999 99 99</p>
                        <p>+38 (096) 666 66 66</p>
                        <p>dniproalpprom@gmail.com</p>
                        <a className="footer-link" href="https://www.facebook.com/dniproalpprom">www.facebook.com/dniproalpprom</a>
                    </div>
                    <div className="footer-logo-wrap">
                        <img className="footer-logo-img" src={logoFooter} alt="logo footer"/>
                    </div>
                </div>
            </div>
        </>
    )
}