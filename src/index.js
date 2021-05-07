import ReactDOM from "react-dom";
import Footer from "./components/footer";

import Header from './components/header'
import Menu from './components/menu'


function App(){
  //const [check,setCheck] = React.useState('escondido')
  //const [quantity,setQuantity] = React.useState(1)
    return(
      <>
      <Header/>
      <Menu />
      <Footer/>
      </>
    )
}




ReactDOM.render(<App />, document.querySelector(".root"));