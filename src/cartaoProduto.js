import { AdicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo() {
for (const produtoCatalogo of catalogo) {
    const cartaoProduto =  `
<div class="border-solid w-68 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-300 rounded-lg group 
${produtoCatalogo.feminino ? 'feminino' : 'masculino'

}" id="card-produto-${produtoCatalogo.id}">
<img
class="group-hover:scale-110 duration-300 my-3 rounded-lg"
src="./assets/${produtoCatalogo.imagem}" 
alt="Produto 1 da loja"
/>
        <p class="text-sm">${produtoCatalogo.nome}</p>
        <p class="text-sm">${produtoCatalogo.marca}</p>
        <p class="text-sm">${produtoCatalogo.preco}</p>
        <button id="adicionar-${produtoCatalogo.id}" class="bg-slate-950 hover:bg-slate-500 text-white"><i class="fa-solid fa-cart-plus"></i></button>
         </div>
        `

        document.getElementById("container-produto").innerHTML += cartaoProduto;
        
}

for (const produtoCatalogo of catalogo) {
    document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click',() => AdicionarAoCarrinho(produtoCatalogo.id));
}
}