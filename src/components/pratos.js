import CadaPrato from "./plateOptions";
const plateOption=[
    {option:"frango",
    image:"img/frango_yin_yang.png",
    title:'Frango Yin Yang',
    description:'frfrfrfrfrf',
    price:'14,90',
    id:1},

    {option:"carne",
    image:"img/frango_yin_yang.png",
    title:'Carne Yin Yang',
    description:'descricao da carne',
    price:'18,90',
    id:2},

    {option:"peixe",
    image:"img/frango_yin_yang.png",
    title:'Peixe Yin Yang',
    description:'descricao do peixe',
    price:'167,90',
    id:3}
] 




export default function Pratos(props){

    return (
        <div class="secao">

            <div class="titulo">Primeiro, seu prato</div>

            <div class="opcoes pratos">
                {plateOption.map((item) =>

                    <CadaPrato dish={item.option} desc={item.description} price={item.price} image={item.image} key={item.id} title={item.title} plateOption={plateOption} isSelected={item.isSelected} escolhido={props.escolhido} setEscolhido={props.setEscolhido} />
                )}
            </div>
        </div>

    )

    
  
  
}