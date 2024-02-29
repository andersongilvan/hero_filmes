import iconDc from "../../assets/iconDc.jpg";
import iconMarvel from "../../assets/iconMarvel.png";
import iconLegendary from "../../assets/iconLegendary.webp";
import iconeParamount from '../../assets/logo produtoras/logoParmount.webp'
import iconLupa from "../../assets/iconLupa.png";
import "./style.css";
import { ItemFilmes } from "../CardFilme";

import { filmes } from "../../data";
import { useState } from "react";

export const ListarFilmes = () => {
  // função que filtra os filmes por plataforma
  const [ListarFilmes, setListarFilmes] = useState(filmes);
  const handleFiltrarFilmes = (produtora) => {
    setListarFilmes(filmes.filter((filme) => filme.produtora === produtora));
  };
  // função que faz a limpeza do filtro
  const limparFiltro = () => {
    setListarFilmes(filmes);
  }

    // função que faz a busca digitado
    const handleBuscarFilme = (textoDigitado) => {
      setListarFilmes(
        filmes.filter(
          (filme) =>
            filme.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
            filme.produtora.toLowerCase().includes(textoDigitado.toLowerCase())
        )
      );
    };

    return (
        
      <div className="container-principal">
        <h2>Encontre Seu Filmes Favoritos</h2>
        <p>
            Explore o universo cinematográfico de heróis no Hero Filmes - O destino definitivo para os amantes de filmes repletos de aventuras, ação e superpoderes!
            </p>
        <div className="container-btn-modo-escuro" id="container-btn">
          <button onClick={() => handleFiltrarFilmes("dc")}>
            <img src={iconDc} />
          </button>
          <button onClick={() => handleFiltrarFilmes("marvel")}>
            <img src={iconMarvel} />
          </button>
          <button onClick={() => handleFiltrarFilmes("legendary")}>
            <img src={iconLegendary} />
          </button>
          <button onClick={() => handleFiltrarFilmes("paramount")}>
            <img src={iconeParamount} />
          </button>
          <button onClick={() => limparFiltro()} className="btn-limpar-filtro">
            Limpar Filtro
          </button>
        </div>
        <div className="container-input">
          <img src={iconLupa} className="lupa" />
          <input
            type="text"
            onChange={(event) => handleBuscarFilme(event.target.value)}
            placeholder="Buscar Filmes"
          />
        </div>
        <div className="" id="container-filmes">
          {ListarFilmes.map((filme) => (
            <ItemFilmes
              key={filme.id}
              nome={filme.nome}
              produtora={filme.produtora}
            />
          ))}
        </div>
      </div>
    );
  
};
