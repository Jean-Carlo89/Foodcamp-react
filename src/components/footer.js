export default function Footer(props){
   const {prato,bebida,doce} = props

   const verify = verifyFunction(prato,bebida,doce)
   
    return(
        <>
        <button onClick={checkVerify}>verify</button >   <button onClick={checkPrato}>prato</button>
        
        <div class={`footer ${verify ? "green" : "gray"}`} onClick={verify? goTowhats : null} >
           
            <p class='fazer-pedido'>{verify ? 'Fechar pedido' : `Selecione os 3 itens para fechar o pedido`}</p>
            
        </div>
        </>
      
        )


      function verifyFunction(prato,bebida,doce){
            return prato.length>0 && bebida.length>0 && doce.length>0? true : false
        }


        function checkVerify(){
            console.log(verify)
        }

        function checkPrato(){
            console.log(prato)
            console.log(bebida)
            console.log(doce)
        }

        function goTowhats(){
            const totalPrato = prato.map(item => (parseInt(item.price.replace(',','.')))*item.quantidade).reduce((total, numero) => total + numero, 0);
            const totalBebidas = bebida.map(item => (parseInt(item.price.replace(',','.')))*item.quantidade).reduce((total, numero) => total + numero, 0);
            const totalDoces = doce.map(item => (parseInt(item.price.replace(',','.')))*item.quantidade).reduce((total, numero) => total + numero, 0);
            const total = (totalBebidas + totalPrato + totalDoces).toFixed(2);

            const mensagem = 
            `Olá, gostaria de fazer o pedido: 
            \n - Prato: + ${prato.map(item=> `${item.title} (${item.quantidade}x)`)} 
            \n- Bebida: + ${bebida.map(item=> `${item.title} (${item.quantidade}x)\n`) } 
            \n- Doce: + ${doce.map(item=> `${item.title} (${item.quantidade}x)\n`)}
            \nTotal: R$ +  ${total}`
        window.location.href = "https://wa.me/5571992079633?text=" + encodeURI(mensagem); 
        }
}


{/*<div class="footer">
<a href="#" class="fazer-pedido">
    Selecione os 3 itens<br>para fechar o pedido
</a>
</div>*/}