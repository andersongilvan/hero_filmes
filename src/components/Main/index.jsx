import { Topo } from "../Topo";
import { ListarFilmes } from "../ListarFilmes";
import { SecaoParalax } from "../Secaobaner";
import { Rodape } from "../Rodape";
import { Paralax2 } from "../Paralax2/inde";
import "./style.css";
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export const Main = () => {
  useEffect(() => {
    ScrollReveal().reveal("header", {
      opacity: 0,
      duration: 1000,
      delay: 200,
      reset: true,
    });
  }, []);

  return (
    <main>
      <Topo />
      <SecaoParalax />
      <ListarFilmes />
      <Paralax2 />
      <Rodape />
    </main>
  );
};
