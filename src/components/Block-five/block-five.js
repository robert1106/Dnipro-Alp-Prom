import React from "react";
import {factsList} from "../../data/data-text";
import {imgFacts} from "../../data/data-img";
import uniqid from 'uniqid';

import './block-five.css'

export default function BlockFive({lang, setShowModal}) {
    return (
        <>
            <div className="block block-five" id="block-5">
                <div className="container block-five-position-content">
                    <h2 className="block-header">{
                        lang === "ua"
                            ? "Вартість послуг промислового альпінізму"
                            : "Стоимость услуг промышленного альпинизма"}
                    </h2>
                    <p className="block-five-paragraph">{
                        lang === "ua"
                            ? "Звичайно ж, зайшовши на сайт компанії \"Дніпро-АльпПром \", ви можете побачити прайс на промисловий альпінізм, однак слід розуміти, що розцінки на промисловий альпінізм там наведені тільки приблизні. Підсумкова вартість може відрізнятися від наведених значень як в меншу, так і в більшу сторону. Це визначається безліччю факторів:"
                            : "Конечно же, зайдя на сайт компании \"Днепр-АльпПром\", вы можете увидеть прайс на промышленный альпинизм, однако следует понимать, что расценки на промышленный альпинизм там приведены только примерные. Итоговая стоимость может отличаться от приведенных значений как в меньшую, так и в большу сторону. Это определяется множеством факторов:"}
                    </p>
                    <ul className="facts-list">
                        {factsList.map((fact, index) => (
                            <li className="facts-item" key={uniqid()}>
                                <div className="wrap-facts-img">
                                    <img className="facts-img" src={imgFacts[index]} alt="image block five"/>
                                </div>
                                <span className="facts-title">{
                                    lang === "ua"
                                        ? fact.ua
                                        : fact.ru}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <p className="block-five-paragraph">{
                        lang === "ua"
                            ? "Всі ці питання вирішуються в індивідуальному порядку, з кожним клієнтом окремо. Пам'ятайте, що промислові альпіністи в Дніпрі і Дніпропетровській області компанії \"Дніпро-АльпПром\", завжди готові надати вам допомогу в плані виконання робіт, пов'язаних з відновленням цілісності фасадів або ж будь-яких інших висотних робіт."
                            : "Все эти вопросы решаются в индивидуальном порядке, с каждым клиентом в отдельности. Помните, что промышленные альпинисты в Днепре и Днепропетровской области компании \"Днепр-АльпПром\", всегда готовы оказать вам помощь в плане выполнения работ, связанных с восстановлением целостности фасадов или же каких-либо других высотных работ."}
                    </p>
                    <button className="block-btn block-five-btn"
                            onClick={() => setShowModal({callback: false, faq: false, price: true})}>
                        <span className="btn-text">Прайс</span>
                    </button>
                </div>
            </div>
        </>
    )
}