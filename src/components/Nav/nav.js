import React from "react";
import uniqid from 'uniqid';
import {Link} from 'react-scroll'
import {optionButtons} from "../../data/data-text";

import './nav.css'

export default function Nav({lang, setLang}) {
    return (
        <nav className="nav">
            <div className="container nav-wrap">
                <ul className="nav-list">
                    {optionButtons.map((btn, index) => (
                        <Link activeClass="btn-active"
                                      to={"block-"+(index+1)}
                                      spy={true}
                                      smooth={true}
                                      duration={500}
                                      className="block-btn nav-item-menu "
                                      key={uniqid()}>
                            <span className="btn-text">
                                {lang === "ua" ? btn.ua : btn.ru}
                            </span>
                        </Link>)
                    )}
                </ul>
                <ul className="nav-list">
                    <li className={"block-btn nav-item-lang "+(lang === "ru" ? "btn-active" : "")}
                        onClick={() => setLang("ru")}>
                        <span className="btn-text">РУС</span>
                    </li>
                    <li className={"block-btn nav-item-lang "+(lang === "ua" ? "btn-active" : "")}
                        onClick={() => setLang("ua")}>
                        <span className="btn-text">УКР</span>
                    </li>
                </ul>
            </div>
        </nav>
    )
}