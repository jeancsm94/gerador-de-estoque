import React, { useState } from "react";
import './stockItems.css';
import { Link, Outlet, useLoaderData } from "react-router-dom";

function verifyLink() {
    const link = window.location.pathname;
    return link.length > 6;
}

export default function StockItems() {
    const [ firstPage, setFirstPage ] = useState(verifyLink());

    const clickLink = () => {
        setFirstPage(false);
    }

    const products = useLoaderData();
    return (
        <>
            <section>
                <h1 className="title">Stock Items</h1>

                <nav className="menu-items">
                    <Link className="item-link" onClick={() => clickLink()}>Todos os itens</Link>
                    <Link className="item-link" to="/items/edit" onClick={() => setFirstPage(!firstPage)}>Novo item</Link>
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
                                {
                                    products.map((p) => {
                                        return (
                                        <tr className="list-group stock">
                                            <td>{p.id}</td>
                                            <td>{p.title}</td>
                                            <td>{p.rating.count}</td>
                                            <td>{p.category}</td>
                                            <td>
                                                <div className="menu-actions">
                                                    <Link to={`edit/${p.id}`} onClick={() => setFirstPage(!firstPage)} className="btn btn-blue color-black">Ver</Link>
                                                    <button className="btn btn-white color-black">Atualizar</button>
                                                    <button className="btn btn-red color-black">Excluir</button>
                                                </div>
                                            </td>
                                        </tr>
                                            )
                                    }) ??
                                    <tr>
                                        <td>Nenum produto encontrado!</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                        }
            </section>
        </>
    )
}