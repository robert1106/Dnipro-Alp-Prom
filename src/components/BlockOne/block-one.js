import React, {Component} from "react";

import './block-one.css'
import imgBlockOne from './bag-block-1.png'
import imgLogo from './logo.svg'

export default class BlockOne extends Component {
    render() {
        const lang = this.props.lang;
        return (
            <>
                <div className="block-one">
                    <img className="block-img" src={imgBlockOne} alt="image block 1"/>
                    <div className="block-one-wrap">
                        <img className="block-one-logo" src={imgLogo} alt="image logo"/>
                        <div className="block-one-title-position">
                            <span className="block-one-title">{
                                lang === "ua"
                                    ? "Промисловий альпінізм висотні та верхолазні роботи по всій Україні"
                                    : "Промышленный альпинизм высотные и верхолазные работы"}
                            </span>
                        </div>
                    </div>
                    <button className="block-btn callback-btn">
                        <a href="#" className="btn-text">{
                            lang === "ua"
                                ? "Зв'язатися з нами"
                                : "Связаться с нами"}
                        </a>
                    </button>
                </div>
            </>
        )
    }
}