

export const catalogo = [{
    id: "1",
    nome: 'Tenis Nike',
    marca: 'Nike',
    preco: 300,
    imagem: 'tenis (1).jpeg',
    masculino: true
},
{
    id: "2",
    nome: 'Tenis NewBalance',
    marca: 'NewBalance',
    preco: 310,
    imagem: 'tenis (2).jpeg',
    masculino: true
},
{
    id: "3",
    nome: 'Tenis NewBalance',
    marca: 'NewBalance',
    preco: 310,
    imagem: 'tenis (3).jpeg',
    masculino: true
},
{
    id: "4",
    nome: 'Tenis NewBalance',
    marca: 'NewBalance',
    preco: 310,
    imagem: 'tenis (4).jpeg',
    masculino: true
},
{
    id: "5",
    nome: 'Tenis NewBalance',
    marca: 'NewBalance',
    preco: 310,
    imagem: 'tenis.jpeg',
    masculino: true
},
{
    id: "6",
    nome: 'Tenis NewBalance',
    marca: 'NewBalance',
    preco: 310,
    imagem: 'tenis2.jpeg',
    masculino: true
},
{
    id: "7",
    nome: 'Tenis NewBalance',
    marca: 'NewBalance',
    preco: 310,
    imagem: 'tenis3.jpeg',
    masculino: true
},
];

export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
    localStorage.removeItem(chave);
}

export function desenharProdutoNoCarrinhoSimples(idProduto, idContainerHtml, quantidadeProduto) {
    const produto = catalogo.find(p => p.id === idProduto);
    const containerProdutosCarrinho = document.getElementById(idContainerHtml);

    const elementoArticle = document.createElement("article"); // <article></article>
    const articleClasses = ["flex", "bg-slate-200", "rounded-lg", "p-1", "relative", "mb-2", "w-96" ];

    for (const articleClass of articleClasses) {
        elementoArticle.classList.add(articleClass);
    }

    const cartaoProdutoCarrinho = `     
        <img src="./assets/${produto.imagem}" 
        alt="carrinho: ${produto.nome}" 
        class="h-24 rounded-lg"
        />
        <div class="p-2 flex flex-col justify-between">
        <p class="text-sm">${produto.nome}</p>
        <p class="text-xs">Tamanho: 40</p>
        <p class="text-lg">$${produto.preco}</p>
        </div>
        <div class="flex text-white-400 items-end absolute bottom-0 right-2 text-lg">
            <p id="quantidade-${produto.id}" class="ml-2">${quantidadeProduto}</p>
        </div>` ;
        // <article class="flex bg-slate-900 rounded-lg p-1 relative">codigo do cartao do produto</article>
    elementoArticle.innerHTML = cartaoProdutoCarrinho;
    containerProdutosCarrinho.appendChild(elementoArticle);
}