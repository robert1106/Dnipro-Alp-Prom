import React, {Component} from "react";
import ButtonCallback from "../Button-callback/button-callback";

import './block-two.css'
import imgBlockTwo from './img-dlock-two.png'

export default class BlockTwo extends Component {
    render() {
        const lang = this.props.lang;
        return (
            <>
                <div className="block block-two" id="block-2">
                    <img className="block-img block-two-img" src={imgBlockTwo} alt="imag block 2"/>
                    <div className="container block-two-element-right">
                        <div className="block-two-wrap">
                            <span className="block-two-title">{
                                lang === "ua"
                                ? "Компанія\n«Дніпро-АльпПром»"
                                : "Компания\n«Днепр-АльпПром»"}
                            </span>
                            <span className="block-two-under-title">{
                                lang === "ua"
                                ? "команда професіоналів,\nяка виконує всі\nвиди висотних робіт!"
                                : "команда профессионалов,\nвыполняющая все\nвиды высотных работ!"}
                            </span>
                            <span className="block-two-paragraph">{
                                lang === "ua"
                                    ? "Ми надаємо будь-які послуги в галузі промислового альпінізму бізнесу, " +
                                    "державним і комунальним підприємствам, ОСББ (ОСББ), а також приватним особам."
                                    : "Мы оказываем любые услуги в области промышленного альпинизма бизнесу, " +
                                    "государственным и коммунальным предприятиям, ОСМД (ОСББ), а также частным лицам."}
                            </span>
                            <div className="block-two-element-right">
                                <ButtonCallback lang={lang}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}