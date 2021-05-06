export default function BeverajeJSX(){

    const beverajeOption=[

                    {option:"coca",
                    image:"img/coquinha_gelada.png",
                    title:'coca Yin Yang',
                    description:'enton',
                    price:'2,90'},
                
                    {option:"carne",
                    image:"img/coquinha_gelada.png",
                    title:'coca 2 Yin Yang',
                    description:'descricao da coca 2',
                    price:'5,90'},
                
                    {option:"peixe",
                    image:"img/coquinha_gelada.png",
                    title:'coca 3Yin Yang',
                    description:'descricao do coca 3',
                    price:'8,90'}
                ] 

       
     
        const beverajeOptionJSX = beverajeOption.map((item) => {
            return(

            <div class={`opcao bebida-${item.option}`} onclick="selecionarPrato('.prato-frango', 'Frango Yin Yang', 14.90)">
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


       
    return beverajeOptionJSX 
}
