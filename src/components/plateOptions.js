import React from 'react'


 export default function CadaPrato({dish,desc,price,image,key,title, plateOption, isSelected,escolhido,setEscolhido}){

 const [border,setBorder] = React.useState(false)
 const [counter,setCounter] = React.useState(1)

  
 
 
 function toggleItem(){
     border ? setBorder(false) : setBorder(true)

     setEscolhido([...escolhido,{title, price, quantidade: counter}])

     
 }

 function Plus(e,title){
    e.stopPropagation()
   
    setCounter(counter+1);
    
    
    let modificar = escolhido.filter((item)=>{
       
        if(item.title!==title){
             return true
         }
     })
          
     
    setEscolhido([...modificar,{title,price, quantidade: counter + 1}])
     
 }
    
 
 
 function Minus(e){
       
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

   

 
   
   
 

   return(
    <>
    
        <div class={`opcao prato-${dish} ${border ? "selected" : ""}`} key={key} onClick={()=>toggleItem()}>
            <img src={image} />
            <div class="titulo">{title}</div>
            <div class="descricao">{desc}</div>
            <div class="preco">R$ {price}</div>
            <div class={`quantity`}>
                 <span class="minus" onClick={(e)=>Minus(e,title)}>-</span><span> {counter} </span><span class='plus' onClick={(e)=>Plus(e,title)} >+</span>
            </div>
            
        </div>
        </>

          )

 }