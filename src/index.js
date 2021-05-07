import ReactDOM from "react-dom";
import Footer from "./components/footer";

import Header from './components/header'
import Menu from './components/menu'

import React from 'react'
function App(){
  //const [check,setCheck] = React.useState('escondido')
  //const [quantity,setQuantity] = React.useState(1)
  const [escolhido,setEscolhido] = React.useState([]) 
    return(
      <>
      <Header/>
      <Menu escolhido={escolhido} setEscolhido={setEscolhido}/>
      <Footer prato={escolhido}/>
      </>
    )
}




ReactDOM.render(<App />, document.querySelector(".root"));