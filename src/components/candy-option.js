export default function CandyJSX(){

    const candyOption=[

                    {option:"doce1",
                    image:"img/pudim.png",
                    title:'pudim Yin Yang',
                    description:'enton',
                    price:'78,90'},
                
                    {option:"carne",
                    image:"img/pudim.png",
                    title:'pudim 2 Yin Yang',
                    description:'descricao da pudim 2',
                    price:'56,90'},
                
                    {option:"peixe",
                    image:"img/pudim.png",
                    title:'pudim 3Yin Yang',
                    description:'descricao do pudim 3',
                    price:'87,90'}
                ] 

       
     
        const candyOptionJSX = candyOption.map((item) => {
            return(

            <div class={`opcao sobremesa-${item.option}`} onclick="selecionarPrato('.prato-frango', 'Frango Yin Yang', 14.90)">
                 <img src={item.image} />
                <div class="titulo">{item.title}</div>
                <div class="descricao">{item.description}</div>
                <div class="preco">R$ {item.price}</div>
                <div class="check">
                <ion-icon name="checkmark-circle"></ion-icon>
                </div>
          </div>
            )
            
            
        }) 


       
    return candyOptionJSX 
}
