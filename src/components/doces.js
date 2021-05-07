import CadaDoce from "./doceOptions";

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



export default function Doces(props){

    return (
        <div class="secao">

            <div class="titulo">Por fim, a sobremesa</div>

            <div class="opcoes doces">
                {candyOption.map((item) =>

                    <CadaDoce dish={item.option} 
                    desc={item.description} 
                    price={item.price} 
                    image={item.image} 
                    title={item.title} 
                    candyOption={candyOption} 
                    isSelected={item.isSelected} 
                    escolhidoDoce={props.escolhidoDoce} 
                    setEscolhidoDoce={props.setEscolhidoDoce} />
                )}
            </div>
        </div>

    )

 }