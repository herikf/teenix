import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtrosCatalogo.js";
import { 
    atualizarPrecoCarrinho, 
    inicializarCarrinho, 
    renderizarProdutosCarrinho, 
} from "./src/menuCarrinho.js";

renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();
