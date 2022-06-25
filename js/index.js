import { lista } from "../data.js";

export function cards(produtos) {
  const main = document.getElementById('main')
  let cards = ''
  let coresP = ''
  produtos.map(produto => {
    cards += `
    <div class="card">
      <img src="${produto.imagem}" alt="imagem de uma roupa"/>
      <div class="card__infos">
        <p class="card__text">${produto.descricao}</p>
        <p class="card__text">${produto.tamanho}</p>
        <div class="cores">
          <span>Cores: </span>`
    produto.cores.map(cor => {
      cards += `<div class="bullet" style="background-color:${cor}"></div>`
    })
    cards +=`
    </div>
      <p class="ref">Ref: <span>${produto.ref}</span></p>
      <p class="preco">Preço: <span>R$ ${produto.preco}</span></p>
      </div>
      </img>
    </div>`
    console.log(cards);
  })
  main.innerHTML = cards;
}


export function nav(paths) {


}

window.onload = async function () {

  await cards(lista)
}


