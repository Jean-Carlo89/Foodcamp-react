import Pratos from './pratos'

export default function Menu(props){
  
  //console.log(props)
  //console.log(check)
  //console.log(setCheck)




  return(
    <div class="menu">
       <Pratos escolhido={props.escolhido} setEscolhido={props.setEscolhido}/>  
        

    </div>
    
    )
}



{/*<PlateSJX/>*/}