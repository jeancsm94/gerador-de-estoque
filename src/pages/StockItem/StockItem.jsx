import React from 'react';
import './StockItem.css';

export default function StockItem() {
    return (
        <>
        <div className="stock-item">
            <div className="header-stock-item">
                <h1 className='title-stock-item'>7 Wonders</h1>
                <button className=" btn-white color-black">Atualizar</button>
                <button className="btn-red color-black">Excluir</button>
            </div>
            <div className="content-stock-item">
                <span className=" item-box categori-item">Categoria: Jogos</span>
                <span className=" item-box quantity-item">Quantidade em Estoque: 8</span>
                <span className=" item-box price-item">Preço: R$ 3999.99</span>
            </div>

            <p className='discription-item'>Jogo de tabuleiro para vários jogadores</p>
            <div>
                <span className="createAt">
                    Cadastrado em: {new Date().toLocaleDateString()}
                </span>
                <span className="updateAt">
                    Atualizado em: {new Date().toLocaleDateString()}
                </span>
            </div>
        </div>
        </>
    )
}