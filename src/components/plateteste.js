import React from 'react'


 export default function CadaPrato({dish,desc,price,image,key,title}){
 
 const [border,setBorder] = React.useState(false)
 const [counter,setCounter] = React.useState(1)

 function ToggleBorder(){
     border ? setBorder(false) : setBorder(true)
 }
    
   function Minus(e){
       if (counter>0){
        
        e.stopPropagation()
        if(counter===1){
            setBorder(false)
            setCounter(1)
        }else{
            setCounter(counter-1)
        }
       }
   }
 
   function Teste(title){
        console.log(title)
   }
 
   return(
        <div class={`opcao prato-${dish} ${border ? "selected" : ""}`} key={key} onClick={ToggleBorder}>
            <img src={image} />
            <div class="titulo">{title}</div>
            <div class="descricao">{desc}</div>
            <div class="preco">R$ {price}</div>
            <div class={`quantity`}>
                 <span class="minus" onClick={(e)=>Minus(e)}>-</span><span> {counter} </span><span class='plus' onClick={(e)=>{setCounter(counter+1);e.stopPropagation()}} >+</span>
            </div>
            <button onClick={()=>Teste(title)}>testar1</button>
        </div>

          )

 }