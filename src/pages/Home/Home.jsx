import React from "react";
import './home.css'


export default function Home() {
    return(
        <>
            <section>
                <h1 className="title">Dashboard</h1>
                <section className="dashboard-stock">
                    <section className="amount-stock-all">
                        <div className="cards">
                            <div className="card-dashboard">
                                <h3>Diversidade de itens</h3>
                                <p className="amount-stock">2</p>
                            </div>
                            <div className="card-dashboard">
                                <h3>Inventário total</h3>
                                <p className="amount-stock">40</p>
                            </div>
                        </div>
                        <table style={{width: '100%'}}>
                            <thead>
                                <tr className="nav-bar-items">
                                    <th>Itens Recentes</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="list-group">
                                    <td>7 Wonders</td>
                                    <td><button className="btn-white color-black">Ver</button></td>
                                </tr>
                                <tr className="list-group">
                                    <td>7 Wonders</td>
                                    <td><button className="btn-white color-black">Ver</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                    <section className="amount-stock-update">
                        <div className="cards">
                            <div className="card-dashboard">
                                <h3>Diversidade de itens</h3>
                                <p className="amount-stock">2</p>
                            </div>
                            <div className="card-dashboard">
                                <h3>Inventário total</h3>
                                <p className="amount-stock">40</p>
                            </div>
                        </div>
                        <table style={{width: '100%'}}>
                            <thead>
                                <tr className="nav-bar-items-final">
                                    <th>Itens Acabando</th>
                                    <th>Qtd.</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="list-group-final">
                                    <td>7 Wonders</td>
                                    <td>7</td>
                                    <td><button className="btn-white">Ver</button></td>
                                </tr>
                                <tr className="list-group-final">
                                    <td>7 Wonders</td>
                                    <td>6</td>
                                    <td><button className="btn-white">Ver</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </section>
            </section>
        </>
    )
};
