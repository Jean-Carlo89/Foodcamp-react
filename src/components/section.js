import PlateJSX from "./plate-option";
import BeverajeJSX from "./beveraje-option";
import CandyJSX from "./candy-option";

export default function Section(){




    return(
        <div class="secao">
            <div class="titulo">Primeiro, seu prato</div>
        
            <div class={`opcoes pratos`}>
                {PlateJSX()}
            </div>

            
            <div class="titulo">Agora, sua bebida</div>
            
            <div class={`opcoes bebidas`}>
                
               <BeverajeJSX/>
            </div>

            <div class="titulo">Por fim, sua sobremesa</div>
            
            <div class={`opcoes bebidas`}>
                
               <CandyJSX/> 
            </div>
        </div>
        )




}