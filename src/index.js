import ReactDOM from "react-dom";

import Header from './components/header'
import Menu from './components/menu'

function App(){

    return(
      <>
      <Header/>
      <Menu/>
      </>
    )
}




ReactDOM.render(<App />, document.querySelector(".root"));