import React from 'react';
import './NewItem.css'


export function NewItem() {

  
  return (
    <>
    <div>
      <h1>NewItem</h1>
      <form>
        <div className='form-first'>
          <div className="first-section">
            <div className='input'>
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className='input'>
              <label htmlFor="qtd">Quantidade</label>
              <input type="number" name="qtd" id="qtd" />
            </div>
            <div className='input'>
              <label htmlFor="price">Preço</label>
              <input type="number" name="price" id="price" />
            </div>
            <div className='input'>
              <label htmlFor="categori">Categoria</label>
              <input type="text" name="categori" id="categoria" />
            </div>
          </div>
          <div className="second-section">
            <div className='input'>
              <label htmlFor="description">Descrição</label>
              <textarea name="description" id="description"></textarea>
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
