import React from "react";

import './price-table.css'

export default function PriceTable({lang}) {
    return (
        <div className="wrap-price">
            <h2>{
                lang === "ua"
                    ? "Ціни на висотні роботи"
                    : "Цены на высотные работы"}
            </h2>
            <table  className="table">
                <thead >
                    <tr >
                        <th  scope="col">{
                            lang === "ua"
                                ? "Найменування робіт"
                                : "Наименование работы"}
                        </th>
                        <th  scope="col">{
                            lang === "ua"
                                ? "Од.вим."
                                : "Ед.изм."}
                        </th>
                        <th  scope="col">{
                            lang === "ua"
                                ? "Ціни від"
                                : "Цены от"}
                        </th>
                        <th  scope="col">{
                            lang === "ua"
                                ? "Примітки"
                                : "Примечания"}
                        </th>
                    </tr>
                </thead>
                <tbody >
                <h4>Фасадные работы</h4>
                <tr >
                    <td >Утепление фасада альпинистами</td>
                    <td >м.кв.</td>
                    <td >от 600 грн.</td>
                    <td >с материалом</td>
                </tr>
                <tr >
                    <td >Ремонт и покраска фасада</td>
                    <td >м.кв.</td>
                    <td >от 25 грн.</td>
                    <td >без материала</td>
                </tr>
                <tr >
                    <td >Гидрофобизация фасада</td>
                    <td >м.кв.</td>
                    <td >от 20 грн.</td>
                    <td >без материала</td>
                </tr>
                <tr >
                    <td >Простукивание плитки</td>
                    <td >м.пог.</td>
                    <td >от 10 грн.</td>
                    <td/>
                </tr>
                <tr >
                    <td >Обследование фасада альпинистами</td>
                    <td >вызов</td>
                    <td >от 2000 грн.</td>
                    <td/>
                </tr>
                <tr >
                    <td >Герметизация швов</td>
                    <td >м.пог.</td>
                    <td >от 120 грн.</td>
                    <td >с материалом</td>
                </tr>
                <tr >
                    <td >Герметизация швов с выбивание</td>
                    <td >м.пог.</td>
                    <td >от 300 грн.</td>
                    <td >с материалом</td>
                </tr>
                </tbody>
                <tbody >
                <h4 >Клининговые работы</h4>
                <tr >
                    <td >Мойка окон альпинистами</td>
                    <td >м.кв.</td>
                    <td >от 20 грн.</td>
                    <td >от 150 м.кв.</td>
                </tr>
                <tr >
                    <td >Мойка малых объемах</td>
                    <td >вызов</td>
                    <td >от 2000 грн.</td>
                    <td/>
                </tr>
                <tr >
                    <td >Мойка фасада</td>
                    <td >м.кв.</td>
                    <td >от 15 грн.</td>
                    <td >от 200 м.кв.</td>
                </tr>
                <tr >
                    <td >Чистка крыш от снега и сосулек</td>
                    <td >вызов</td>
                    <td >от 2000 грн.</td>
                    <td/>
                </tr>
                <tr >
                    <td >Чистка крыш от снега и сосулек</td>
                    <td >м.кв.</td>
                    <td >от 15 грн.</td>
                    <td >от 200 м.кв.</td>
                </tr>
                <tr >
                    <td >Очистка фасада от высолов</td>
                    <td >м.кв.</td>
                    <td >от 35 грн.</td>
                    <td/>
                </tr>
                </tbody>
                <tbody ><h4 >Монтажные работы на
                    высоте</h4>
                <tr >
                    <td >Монтаж воздуховодов вентиляции</td>
                    <td >м.пог.</td>
                    <td >от 120 грн.</td>
                    <td/>
                </tr>
                <tr >
                    <td >Монтаж сэндвич дымоходов</td>
                    <td >м.пог.</td>
                    <td >от 150 грн.</td>
                    <td/>
                </tr>
                <tr >
                    <td >Монтаж водосточных труб</td>
                    <td >м.пог.</td>
                    <td >от 100 грн.</td>
                    <td/>
                </tr>
                <tr >
                    <td >Монтаж рекламных баннеров</td>
                    <td >м.кв.</td>
                    <td >от 50 грн.</td>
                    <td/>
                </tr>
                <tr >
                    <td >Монтаж рекламных каркаса для баннеров</td>
                    <td >м.пог.</td>
                    <td >от 100 грн.</td>
                    <td/>
                </tr>
                <tr >
                    <td >Монтаж баннерной сетки</td>
                    <td >м.кв.</td>
                    <td >от 35 грн.</td>
                    <td/>
                </tr>
                <tr >
                    <td >Монтаж декора, объёмных букв, логотипа</td>
                    <td/>
                    <td >догов.</td>
                    <td/>
                </tr>
                <tr >
                    <td >Монтаж отлива на окна</td>
                    <td >м.пог.</td>
                    <td >от 75 грн.</td>
                    <td/>
                </tr>
                </tbody>
                <tbody ><h4 >Подъем/спуск груза
                    альпинистами</h4>
                <tr >
                    <td >Подъем груза до 50 кг</td>
                    <td >шт.</td>
                    <td >от 2500 грн.</td>
                    <td />
                </tr>
                <tr >
                    <td >Подъем груза до 100 кг</td>
                    <td >шт.</td>
                    <td >от 3000 грн.</td>
                    <td/>
                </tr>
                <tr >
                    <td >Подъем груза до 200 кг</td>
                    <td >шт.</td>
                    <td >от 9000 грн.</td>
                    <td/>
                </tr>
                <tr >
                    <td >Подъем груза свыше 300 кг</td>
                    <td >шт.</td>
                    <td >от 12000 грн.</td>
                    <td/>
                </tr>
                </tbody>
            </table>
        </div>
    )
}