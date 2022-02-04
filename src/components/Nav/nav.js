import React, {Component} from "react";
import uniqid from 'uniqid';
import {Link} from 'react-scroll'

import './nav.css'

export default class Nav extends Component {

    state = {
        optionButtons: [
            {ua:"Головна", ru: "Главная"},
            {ua:"Про нас", ru: "Про нас"},
            {ua:"Ваша вигода", ru: "Ваша вигода"},
            {ua:"Послуги", ru: "Услуги"},
            {ua:"Прайс", ru: "Прайс"},
            {ua:"FAQ", ru: "FAQ"},
        ]
    }

    render() {
        const lang = this.props.state.lang;
        const setLang = this.props.state.setLang;
        return (
            <nav className="nav">
                <div className="container nav-wrap">
                    <ul className="nav-list">
                        {this.state.optionButtons.map((btn, index) => {
                            return (<Link activeClass="btn-active"
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
                        })}
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
}