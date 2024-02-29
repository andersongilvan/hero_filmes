import { Topo } from "../Topo";
import { ListarFilmes } from "../ListarFilmes";
import { SecaoParalax } from "../Secaobaner";
import { Rodape } from "../Rodape";
import { Paralax2 } from "../Paralax2/inde";
import './style.css'


export const Main = () => {
    return(
        <main>
            <Topo/>
            <SecaoParalax/>
            <ListarFilmes/>
            <Paralax2/>
            <Rodape/>
            
        </main>
    )
} 