import React from 'react';
import './StockItem.css';
import { useLoaderData } from 'react-router-dom';

export default function StockItem() {
    const product = useLoaderData();
    return (
        <>
        <div className="stock-item">
            <div className="header-stock-item">
                <h1 className='title-stock-item'>{product.title}</h1>
                <button className=" btn-white color-black">Atualizar</button>
                <button className="btn-red color-black">Excluir</button>
            </div>
            <div className="content-stock-item">
                <span className=" item-box categori-item">Categoria: {product.category}</span>
                <span className=" item-box quantity-item">Quantidade em Estoque: {product.rating.count}</span>
                <span className=" item-box price-item">Preço: R$ {product.price}</span>
            </div>

            <p className='discription-item'>Jogo de tabuleiro para vários jogadores</p>
            <div>
                <span className="createAt">
                    Cadastrado em: {new Date().toLocaleDateString() ?? product.createdAt.toLocaleDateString()}
                </span>
                <span className="updateAt">
                    Atualizado em: {new Date().toLocaleDateString() ?? product.updatedAt.toLocaleDateString()}
                </span>
            </div>
        </div>
        </>
    )
}