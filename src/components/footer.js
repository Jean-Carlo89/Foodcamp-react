export default function Footer(props){
   const {prato} = props

   const verify = verifyFunction(prato)
   
    return(
    
        <div class={`footer ${verify ? "green" : "gray"}`} onClick={verify? goTowhats : null} >
           <button onClick={checkVerify}>verify</button >   <button onClick={checkPrato}>prato</button>
            <p class='fazer-pedido'>{verify ? 'Fechar pedido' : `Selecione os 3 itens para fechar o pedido`}</p>
            
        </div>
        
      
        )


      function verifyFunction(prato){
            return prato.length>0 ? true : false
        }


        function checkVerify(){
            console.log(verify)
        }

        function checkPrato(){
            console.log(prato)
        }

        function goTowhats(){
            const totalPrato = prato.map(item => (parseInt(item.price.replace(',','.')))*item.quantidade).reduce((total, numero) => total + numero, 0);

            const total = ( totalPrato ).toFixed(2);

            const mensagem = 
            `Olá, gostaria de fazer o pedido: 
            \n - Prato: + ${prato.map(item=> `${item.title} (${item.quantidade}x)`)} 
           
            \nTotal: R$ +  ${total}`
        window.location.href = "https://wa.me/5571992079633?text=" + encodeURI(mensagem); 
        }
}


{/*<div class="footer">
<a href="#" class="fazer-pedido">
    Selecione os 3 itens<br>para fechar o pedido
</a>
</div>*/}