import React, {Component} from "react";
import uniqid from 'uniqid';

import './nav.css'

export default class Nav extends Component {

    state = {
        optionButtons: [
            {ua:"Головна", ru: "Главная", active: true,},
            {ua:"Про нас", ru: "Про нас", active: false,},
            {ua:"Ваша вигода", ru: "Ваша вигода", active: false,},
            {ua:"Послуги", ru: "Услуги", active: false,},
            {ua:"Прайс", ru: "Прайс", active: false,},
            {ua:"FAQ", ru: "FAQ", active: false,},
        ]
    }

    clickBtnMenu = (index) => {
        console.log(index);
    }

    render() {
        const lang = this.props.state.lang;
        const setLang = this.props.state.setLang;
        return (
            <nav className="nav">
                <div className="container nav-wrap">
                    <ul className="nav-list">
                        {this.state.optionButtons.map((btn, index) => {
                            return (<li className={"block-btn nav-item-menu "+(btn.active ? "btn-active" : "")}
                                        key={uniqid()} onClick={() => this.clickBtnMenu(index)}>
                                        <a href="#" className="btn-text">
                                            {lang === "ua" ? btn.ua : btn.ru}
                                        </a>
                                    </li>)
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

// {lang === "ru" ? "" : ""}