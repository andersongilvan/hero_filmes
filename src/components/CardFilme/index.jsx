import "./style.css";
import logoDc from "../../assets/logo produtoras/logoDc.png";
import logoLegendary from "../../assets/logo produtoras/logoLegendary.jpg";
import logoMarvel from "../../assets/logo produtoras/logoMarvel.jpg";
import logoParamount from "../../assets/logo produtoras/logoParmount.webp";

export const ItemFilmes = ({ produtora, nome }) => {
  return (
    <div id="card">
      <div className="container-img">
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
      <p> {nome} </p>
    </div>
  );
};
