import iconDc from "../../assets/iconDc.jpg";
import iconMarvel from "../../assets/iconMarvel.png";
import iconLegendary from "../../assets/iconLegendary.webp";
import iconeParamount from "../../assets/logo produtoras/logoParmount.webp";
import iconLupa from "../../assets/iconLupa.png";
import "./style.css";
import { ItemFilmes } from "../CardFilme";
import { retornarFilmes, buscarFilme, filtrarFilme } from "../../servico";

import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import { useState } from "react";

export const ListarFilmes = () => {
  const [ListarFilmes, setListarfilmes] = useState(retornarFilmes());
  const [textoBusca, setTextoBusca] = useState("");

  const handleLimparFiltro = () => {
    setListarfilmes(retornarFilmes());
    setTextoBusca("");
  };

  const handleFiltrarFilmePlataforma = (produtora) => {
    setListarfilmes(filtrarFilme(produtora));
    setTextoBusca("");
  };

  const handleBuscarFilme = (textoDigitado) => {
    setTextoBusca(textoDigitado);
    setListarfilmes(buscarFilme(textoDigitado));
  };

  useEffect(() => {
    ScrollReveal().reveal(
      ".container-principal, .container-btn-modo-escuro, .container-input",
      {
        easing: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        distance: "20px",
        duration: 1000,
        delay: 200,
        reset: true,
      }
    );
  }, []);
  useEffect(() => {
    ScrollReveal().reveal("#card", {
      scale: 1.5,
  duration: 1000,
  delay: 200,
      reset: true,
    });
  }, []);

  return (
    <div className="container-principal">
      <h2>Encontre Seu Filmes Favoritos</h2>
      <p>
        Explore o universo cinematográfico de heróis no Hero Filmes - O destino
        definitivo para os amantes de filmes repletos de aventuras, ação e
        superpoderes!
      </p>
      <div className="container-btn-modo-escuro" id="container-btn">
        <button onClick={() => handleFiltrarFilmePlataforma("dc")}>
          <img src={iconDc} />
        </button>
        <button onClick={() => handleFiltrarFilmePlataforma("marvel")}>
          <img src={iconMarvel} />
        </button>
        <button onClick={() => handleFiltrarFilmePlataforma("legendary")}>
          <img src={iconLegendary} />
        </button>
        <button onClick={() => handleFiltrarFilmePlataforma("paramount")}>
          <img src={iconeParamount} />
        </button>
        <button
          onClick={() => handleLimparFiltro()}
          className="btn-limpar-filtro"
        >
          Limpar Filtro
        </button>
      </div>
      <div className="container-input">
        <img src={iconLupa} className="lupa" alt="" />
        <input
          type="text"
          value={textoBusca}
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
