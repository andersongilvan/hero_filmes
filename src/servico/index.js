import { filmes } from "../data";



// função que retorna todos os filmes
export const retornarFilmes = () => {
    return filmes
}

// funçã que faz a busca por texto digitado
export const buscarFilme = (textoDigitado) => {
    return filmes.filter((filme) => filme.nome.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase()) || filme.produtora.toLocaleLowerCase().includes(textoDigitado.toLocaleLowerCase()))
}

// função que filtra o filme por produtoras
export const filtrarFilme = (produtora) => {
    return filmes.filter((filme) => filme.produtora === produtora)
}
