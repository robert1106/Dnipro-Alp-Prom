import React, {useState} from "react";
import Form from 'react-bootstrap/Form'
import {dataForm} from "../../data/data-form";

import './callback-modal.css'

export default function CallbackModal({lang, showFaq}) {

    let [validName, setValidName] = useState(false);
    let [validTell, setValidTell] = useState(false);
    let [validEmail, setValidEmail] = useState(false);
    let [validSelect, setValidSelect] = useState(false);

    const changForm = (event) => {
        switch (event.target.id) {
            case "name":
                if (/[A-zА-яА-ї]/g.test(event.target.value) && event.target.value.length >= 3) {
                    setValidName(false);
                    dataForm.valueName = event.target.value;
                } else {
                    setValidName(true);
                }
                break;
            case "tell":
                if (/^((\+380)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{9,10}$/.test(event.target.value)){
                    setValidTell(false);
                    dataForm.valueTell = event.target.value;
                } else {
                    setValidTell(true);
                }
                break;
            case "email":
                if (/^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u.test(event.target.value)){
                    setValidEmail(false);
                    dataForm.valueEmail = event.target.value;
                } else {
                    setValidEmail(true);
                }
                break;
            case "select":
                if (event.target.value === "Виберіть вид роботи" || event.target.value === "Выберите вид работы"){
                    setValidSelect(true);
                } else {
                    setValidSelect(false);
                    dataForm.valueSelect = event.target.value;
                }
                break;
            case "textarea":
                dataForm.valueTextarea = event.target.value;
                break;
            default:
                console.log("Error id")
        }
    };

    const dispatchForm = () => {
        if (validName || !dataForm.valueName.length) {
            validName = true;
            setValidName(true);
        }
        if (validTell || !dataForm.valueTell.length) {
            validTell = true;
            setValidTell(true);
        }
        if (validEmail || !dataForm.valueEmail.length) {
            validEmail = true;
            setValidEmail(true);
        }
        if (validSelect || !dataForm.valueSelect.length) {
            validSelect = true;
            setValidSelect(true);
        }
        if (validName || validTell || validEmail || validSelect) {
            console.log(1);
        } else {
            console.dir(dataForm);
        }
    };

    return (
        <>
            <div className="modal-callback">
                <span className="modal-header">{lang === "ua"
                    ? "Зв'язатися з нами"
                    : "Связаться с нами"}
                </span>
                <div className="modal-callback-wrap">
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>{lang === "ua" ? "Ім'я" : "Имя"}</Form.Label>
                            <Form.Control type="text"
                                          id="name"
                                          placeholder={lang === "ua" ? "Ім'я" : "Имя"}
                                          isInvalid={validName}
                                          onChange={(e) => changForm(e)}/>
                            <Form.Control.Feedback type="invalid">
                                {lang === "ua" ? "Повне ім’я обов'язкове" : "Требуется полное имя"}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Телефон</Form.Label>
                            <Form.Control type="tell"
                                          id="tell"
                                          placeholder="Телефон"
                                          isInvalid={validTell}
                                          onChange={(e) => changForm(e)}/>
                            <Form.Control.Feedback type="invalid">
                                {lang === "ua" ? "Потрібен телефон" : "Требуется телефон"}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email"
                                          id="email"
                                          placeholder="E-mail"
                                          isInvalid={validEmail}
                                          onChange={(e) => changForm(e)}/>
                            <Form.Control.Feedback type="invalid">
                                {lang === "ua" ? "Потрібен e-mail" : "Требуется e-mail"}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>{lang === "ua"
                                ? "Виберіть вид роботи"
                                : "Выберите вид работы"}
                            </Form.Label>
                            <Form.Select id="select"
                                         isInvalid={validSelect}
                                         onChange={(e) => changForm(e)}>
                                <option>{lang === "ua"
                                    ? "Виберіть вид роботи"
                                    : "Выберите вид работы"}
                                </option>
                                <option value="Монтаж/демонтаж">Монтаж/демонтаж</option>
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
                            </Form.Select>
                        </Form.Group>
                    </Form>
                    {showFaq && <><label className="label" htmlFor="name">{lang === "ua" ? "Питання" : "Вопрос"}</label>
                        <textarea className="textarea" id="textarea" onChange={() => changForm()}/></>}
                    <div className="modal-wrap-btn">
                        <button className="modal-btn" onClick={() => dispatchForm()}>{lang === "ua" ? "НАДІСЛАТИ" : "ОТПРАВИТЬ"}</button>
                    </div>
                </div>
            </div>
        </>
    )
}