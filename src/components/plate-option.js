export default function PlateSJX(){

    const plateOption=[{optionMeat:"frango",
                        image:"img/frango_yin_yang.png",
                    title:'Frango Yin Yang',
                    description:'frfrfrfrfrf',
                    price:'14,90'},
                
                    {optionMeat:"carne",
                    image:"img/frango_yin_yang.png",
                title:'Carne Yin Yang',
                description:'descricao da carne',
                price:'18,90'},
            
                {optionMeat:"peixe",
                image:"img/frango_yin_yang.png",
            title:'Peixe Yin Yang',
            description:'descircao do peixe',
            price:'167,90'},
        
            {optionMeat:"peixe",
            image:"img/frango_yin_yang.png",
        title:'Peixe Yin Yang',
        description:'descircao do peixe',
        price:'167,90'},
    
        {optionMeat:"peixe",
        image:"img/frango_yin_yang.png",
    title:'Peixe Yin Yang',
    description:'descircao do peixe',
    price:'167,90'}]
       
       
        
        
        const plateOptionJSX = plateOption.map((item) => {
            return(
            
            <div class={`opcao prato-${item.optionMeat}`} onclick="selecionarPrato('.prato-frango', 'Frango Yin Yang', 14.90)">
                <img src={item.image} />
                <div class="titulo">{item.title}</div>
                <div class="descricao">{item.description}</div>
                <div class="preco">R$ {item.price}</div>
                <div class="check">
                <ion-icon name="checkmark-circle"></ion-icon>
                </div>
          </div>)
        }) 



    return plateOptionJSX 
}