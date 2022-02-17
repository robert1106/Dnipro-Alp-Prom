import React, {useEffect, useState} from 'react'
import uniqid from 'uniqid';

import './carousel-text.css'

export default function CarouselText({lang, data}) {

    const [opacity,setOpacity] = useState(data.map((e, i) => {
        if (!i) {
            return 100;
        } else {
            return 0;
        }
    }));
    const [activeBtnLeft, setActiveBtnLeft] = useState(false);
    const [activeBtnRight, setActiveBtnRight] = useState(false);
    const LENGTH_DATA = data.length;
    let INDEX_DATA = opacity.findIndex(e => e === 100)

    useEffect(() => {
        if (LENGTH_DATA) {
            setActiveBtnRight(true)
        }
    }, [])

    function clickBtnLeft() {
        if (!activeBtnRight) {
            setActiveBtnRight(true);
        }
        opacity[INDEX_DATA] = 0;
        INDEX_DATA -= 1;
        opacity[INDEX_DATA] = 100;
        setOpacity(opacity);
        if (INDEX_DATA === 0) {
            setActiveBtnLeft(false);
        }
    }

    function clickBtnRight() {
        if (!activeBtnLeft) {
            setActiveBtnLeft(true);
        }
        opacity[INDEX_DATA] = 0;
        INDEX_DATA += 1;
        opacity[INDEX_DATA] = 100;
        setOpacity(opacity);
        if ((INDEX_DATA+1) === LENGTH_DATA) {
            setActiveBtnRight(false);
        }
    }

    return (
        <>
            <div className="carousel-section-faq">
                <button className={"carousel-btn-left " + (!activeBtnLeft && "inactive-btn")}
                        onClick={() => activeBtnLeft && clickBtnLeft()}/>
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
                <button className={"carousel-btn-right " + (!activeBtnRight && "inactive-btn")}
                        onClick={() => activeBtnRight && clickBtnRight()}/>
            </div>
        </>
    )
}