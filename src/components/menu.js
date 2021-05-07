import Pratos from './pratos'
import Bebidas from './bebidas'
import Doces from './doces'
export default function Menu(props){
  
  //console.log(props)
  //console.log(check)
  //console.log(setCheck)




  return(
    <div class="menu">
       <Pratos escolhido={props.escolhido} setEscolhido={props.setEscolhido}/>  
       <Bebidas 
       escolhidoBebida={props.escolhidoBebida} 
       setEscolhidoBebida={props.setEscolhidoBebida}
       />
       <Doces escolhidoDoce={props.escolhidoDoce} 
       setEscolhidoDoce={props.setEscolhidoDoce}
       />
        

    </div>
    
    )
}



{/*<PlateSJX/>*/}