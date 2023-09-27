import React from 'react';
import './NewItem.css'
import { useLoaderData } from 'react-router-dom';


export function NewItem() {

  const product = useLoaderData();

  return (
    <>
    <div>
      <h1>NewItem</h1>
      <form>
        <div className='form-first'>
          <div className="first-section">
            <div className='input'>
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" value={product.title} />
            </div>
            <div className='input'>
              <label htmlFor="qtd">Quantidade</label>
              <input type="number" name="qtd" id="qtd" value={product.rating.count} />
            </div>
            <div className='input'>
              <label htmlFor="price">Preço</label>
              <input type="number" name="price" id="price" value={product.price} />
            </div>
            <div className='input'>
              <label htmlFor="categori">Categoria</label>
              <input type="text" name="categori" id="categoria" value={product.category} />
            </div>
          </div>
          <div className="second-section">
            <div className='input'>
              <label htmlFor="description">Descrição</label>
              <textarea name="description" id="description" value={product.description}></textarea>
            </div>
          </div>

          <div className="footer-section">
            <button className='btn-blue btn-form' type="submit">Salvar</button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
}
