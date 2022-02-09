import React from 'react';
import CarouselImg from '../carousels/Carousel-img/carousel-img'

import './block-four.css'
import {dataCarouselOne, dataCarouselTwo, dataCarouselThree} from '../../data/data-carousels'

export default function BlockFour({lang}) {
    return (
        <>
            <div className="block" id="block-4">
                <div className="container">
                    <h2 className="block-four-title">{
                        lang === "ua"
                            ? "Ми виробляємо широкий спектр послуг:"
                            : "Мы производим широкий спектр услуг:"
                    }</h2>
                    <div className="wrap-text-line">
                        <span className="text-left">{
                            lang === "ua"
                                ? "Висотні роботи"
                                : "Высотные работы"
                        }</span>
                        <div className="title-line"/>
                    </div>
                    <CarouselImg lang={lang} data={dataCarouselOne}/>
                    <div className="wrap-text-line">
                        <div className="title-line title-line-left"/>
                        <span className="text-left text-right">{
                            lang === "ua"
                                ? "Монтажні роботи"
                                : "Высотные работы"
                        }</span>
                    </div>
                    <CarouselImg lang={lang} data={dataCarouselTwo}/>
                    <div className="wrap-text-line">
                        <span className="text-left">{
                            lang === "ua"
                                ? "Фасадні роботи"
                                : "Высотные работы"
                        }</span>
                        <div className="title-line"/>
                    </div>
                    <CarouselImg lang={lang} data={dataCarouselThree}/>
                </div>
            </div>
        </>
    )
}