import ReactDOM from "react-dom";
import Footer from "./components/footer";

import Header from './components/header'
import Menu from './components/menu'

import React from 'react'
function App(){
  //const [check,setCheck] = React.useState('escondido')
  //const [quantity,setQuantity] = React.useState(1)
  const [escolhido,setEscolhido] = React.useState([])
  const [escolhidoBebida,setEscolhidoBebida] = React.useState([])
  const [escolhidoDoce,setEscolhidoDoce]= React.useState([])
    
  return(
      <>
      <Header/>
      <Menu escolhido={escolhido} 
      setEscolhido={setEscolhido} 
      escolhidoBebida={escolhidoBebida} 
      setEscolhidoBebida={setEscolhidoBebida}
      escolhidoDoce={escolhidoDoce}
      setEscolhidoDoce={setEscolhidoDoce}
      />
      <Footer prato={escolhido} bebida={escolhidoBebida} doce={escolhidoDoce}/>
      </>
    )
}




ReactDOM.render(<App />, document.querySelector(".root"));