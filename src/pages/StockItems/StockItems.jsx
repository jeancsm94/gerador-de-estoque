import React, { useState } from "react";
import './stockItems.css';
import { Link, Outlet } from "react-router-dom";

export default function StockItems() {
    const [ firstPage, setFirstPage ] = useState(false);
    return (
        <>
            <section>
                <h1 className="title">Stock Items</h1>

                <nav className="menu-items">
                    <button onClick={() => setFirstPage(false)}>Todos os itens</button>
                    <Link to="/items/edit" onClick={() => setFirstPage(!firstPage)} className="btn">Novo item</Link>
                </nav>
                <hr/>
                { firstPage ? <Outlet /> :
                    <table style={{width: '100%'}}>
                            <thead>
                                <tr className="nav-bar-items stock">
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Em Estoque</th>
                                    <th>Categoria</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="list-group stock">
                                    <td>6fdeb9e1-5072-4b94-88b6-5b54d824c814</td>
                                    <td>7 Wonders</td>
                                    <td>7 Unid.</td>
                                    <td>Jogos</td>
                                    <td>
                                        <div className="menu-actions">
                                            <Link to={`edit/6fdeb9e1-5072-4b94-88b6-5b54d824c814`} onClick={() => setFirstPage(!firstPage)} className="btn btn-blue color-black">Ver</Link>
                                            <button className="btn btn-white color-black">Atualizar</button>
                                            <button className="btn btn-red color-black">Excluir</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="list-group stock">
                                    <td>6fdeb9e1-5072-4b94-88b6-5b54d824c814</td>
                                    <td>7 Wonders</td>
                                    <td>7 Unid.</td>
                                    <td>Jogos</td>
                                    <td>
                                        <div className="menu-actions">
                                            <Link to={`edit/6fdeb9e1-5072-4b94-88b6-5b54d824c814`} onClick={() => setFirstPage(!firstPage)} className="btn btn-blue color-black">Ver</Link>
                                            <button className="btn-white color-black">Atualizar</button>
                                            <button className="btn-red color-black">Excluir</button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        }
            </section>
        </>
    )
}