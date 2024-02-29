import "./style.css";
import logoDc from "../../assets/logo produtoras/logoDc.png";
import logoLegendary from "../../assets/logo produtoras/logoLegendary.jpg";
import logoMarvel from "../../assets/logo produtoras/logoMarvel.jpg";
import logoParamount from "../../assets/logo produtoras/logoParmount.webp";

export const ItemFilmes = ({ produtora, capa,  }) => {
  return (
    <div id="card">
    <div className="container-capa">
      <img src={capa} alt="img-capa"/>
    </div>
      <div className="container-logo">
        <img alt="logo"
          src={ 
            produtora === "marvel"
              ? logoMarvel
              : produtora === "dc"
              ? logoDc
              : produtora === "legendary"
              ? logoLegendary
              : logoParamount
          }
        />
      </div>
      
    </div>
  );
};
