import React, {useEffect, useState} from 'react'
import uniqid from 'uniqid';

import './carousel-text.css'

export default function CarouselText({lang, data}) {

    const [opacity,setOpacity] = useState([]);
    data.map((e, i) => {
        if (!i) {
            opacity.push(100)
        } else {
            opacity.push(0)
        }
    })

    return (
        <>
            <div className="carousel-section-faq">
                {/*<button className={"carousel-btn-left " + (!activBtnLeft && "inactive-btn")}*/}
                {/*        onClick={() => activBtnLeft && clickBtnLeft()}/>*/}
                <div className="wrap-section-faq">
                    {data.map((img, index) => {
                        return (
                            <div className="carousel-text-item"
                                 style={{opacity: opacity[index]}}
                                 key={uniqid()}>
                                <h2 className="carousel-faq-title">{lang === "ua"
                                    ? img.title.ua
                                    : img.title.ru}
                                </h2>
                                <p className="carousel-faq-paragraph">{
                                    lang === "ua"
                                        ? img.p.ua
                                        : img.p.ru}
                                </p>
                            </div>
                        )
                    })}
                </div>
                {/*<button className={"carousel-btn-right " + (!activBtnRight && "inactive-btn")}*/}
                {/*        onClick={() => activBtnRight && clickBtnRight()}/>*/}
            </div>
        </>
    )
}