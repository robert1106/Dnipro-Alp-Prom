import React from "react";

import './callback-modal.css'

export default function CallbackModal({lang, showFaq}) {
    return (
        <>
            <div className="modal-callback">
                <span className="modal-header">{lang === "ua"
                    ? "Зв'язатися з нами"
                    : "Связаться с нами"}
                </span>
                <div className="modal-callback-wrap">
                    <label className="label" htmlFor="name">{lang === "ua" ? "Ім'я" : "Имя"}</label>
                    <input className="input" type="text" id="name"/>
                    <label className="label" htmlFor="phone">Телефон</label>
                    <input className="input" type="tel" id="phone"/>
                    <label className="label" htmlFor="email">E-mail</label>
                    <input className="input" type="email" id="email"/>
                    <label className="label" htmlFor="work">{lang === "ua"
                        ? "Виберіть вид роботи"
                        : "Выберите вид работы"}
                    </label>
                    <select className="input" id="works">
                        <option>{lang === "ua"
                            ? "Виберіть вид роботи"
                            : "Выберите вид работы"}
                        </option>
                        <option value="Coconut">Монтаж/демонтаж</option>
                        <option value="Фасадные работы">{lang === "ua"
                            ? "Фасадні роботи"
                            : "Фасадные работы"}
                        </option>
                        <option value="Работы в промышленной зоне">{lang === "ua"
                            ? "Роботи у промисловій зоні"
                            : "Работы в промышленной зоне"}
                        </option>
                        <option value="Подъем и спуск негабаритных грузов">{lang === "ua"
                            ? "Підйом та спуск негабаритних вантажів"
                            : "Подъем и спуск негабаритных грузов"}
                        </option>
                        <option value="Клининговые услуги">{lang === "ua"
                            ? "Клінінгові послуги"
                            : "Клининговые услуги"}
                        </option>
                    </select>
                    {showFaq && <><label className="label" htmlFor="name">{lang === "ua" ? "Питання" : "Вопрос"}</label>
                        <textarea className="textarea" id="name"/></>}
                    <div className="modal-wrap-btn">
                        <button className="modal-btn">{lang === "ua" ? "НАДІСЛАТИ" : "ОТПРАВИТЬ"}</button>
                    </div>
                </div>
            </div>
        </>
    )
}