import React, { useState, useEffect} from "react";

import { Link, useLoaderData } from "react-router-dom";
import './home.css';
import './../../index.css';


export default function Home() {

    const lists = useLoaderData();
    const productsNew = lists[0];
    const productsLow = lists[1];
    
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
                                { productsNew.map( p => {
                                    console.log(productsNew)
                                    return (
                                        <tr className="list-group" key={p.id}>
                                            <td>{p.title}</td>
                                            <td><Link className="btn btn-white color-black" to={`items/edit/${p.id}`}>Ver</Link></td>
                                        </tr> 
                                    ) }) ??
                                <tr>
                                    <td>Nenum produto encontrado!</td>
                                </tr>
                                }
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
                            { productsLow.map( p => {
                                    console.log(productsLow)
                                    return (
                                        <tr className="list-group" key={p.id}>
                                            <td>{p.title}</td>
                                            <td><Link className="btn btn-white color-black" to={`items/edit/${p.id}`}>Ver</Link></td>
                                        </tr> 
                                    ) }) ??
                                <tr>
                                    <td>Nenum produto abaixo de 10</td>
                                </tr>
                                }
                            </tbody>
                        </table>
                    </section>
                </section>
            </section>
        </>
    )
};
