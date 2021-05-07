import React from 'react'


 export default function CadaPrato({dish,desc,price,image,key,title, plateOption, isSelected,escolhido,setEscolhido}){
//console.log(plateOption)
 const [border,setBorder] = React.useState(false)
 const [counter,setCounter] = React.useState(1)

 //const [escolhido,setEscolhido] = React.useState([]) 
 
 
 function toggleItem(){
     border ? setBorder(false) : setBorder(true)

     setEscolhido([...escolhido,{title, price, quantidade: counter}])

     console.log('log do toggle do escolhido:')
     console.log(escolhido)

 }

 function Plus(e,title){
    e.stopPropagation()
   
    setCounter(counter+1);
    
    
    let modificar = escolhido.filter((item)=>{
        //console.log(plateOption)
        if(item.title!==title){
             return true
         }
     })
          
     console.log('log do modificar :')
     console.log(modificar)
    setEscolhido([...modificar,{title,price, quantidade: counter + 1}])
     //console.log(counter)
     /*if(counter===1){
   
      setEscolhido([{title,price, quantidade: 2}])
      //console.log('passou no counter =1')
     } else{
       // console.log('passou no else')
        setEscolhido([{title,price, quantidade: counter+1}])
     }*/
      getArray(escolhido)
 }
    
 
 
 function Minus(e,title){
       
    e.stopPropagation()
        
    if (counter===1){
        
       
        setEscolhido(escolhido.filter((item)=>{
           if(item.title!==title){
                return true
           }
       }))
       setBorder(false)
        setCounter(1)
   
    }else{
    
        let modificar = escolhido.filter((item)=>{
        if(item.title!==title){
             return true
        }
    })
    setCounter (counter -1);
    setEscolhido([...modificar,{title, price, quantidade: counter - 1}])
}
   }

   

   function getArray(escolhido){
        console.log('log do escolhido antes do testar :')
        console.log(escolhido)
   }
 
   function Teste(e,border,counter){
       e.stopPropagation()
       //console.log(border)
       //console.log(counter)
       console.log('log do getArray do testar :')
       console.log(escolhido)
   }

   
 
   return(
        <div class={`opcao prato-${dish} ${border ? "selected" : ""}`} key={key} onClick={()=>toggleItem()}>
            <img src={image} />
            <div class="titulo">{title}</div>
            <div class="descricao">{desc}</div>
            <div class="preco">R$ {price}</div>
            <div class={`quantity`}>
                 <span class="minus" onClick={(e)=>Minus(e,title)}>-</span><span> {counter} </span><span class='plus' onClick={(e)=>Plus(e,title)} >+</span>
            </div>
            <button onClick={(e)=>Teste(e,border,counter)}>testar1</button>
        </div>

          )

 }