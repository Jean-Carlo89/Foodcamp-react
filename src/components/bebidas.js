import CadaBebida from "./beverajeOptions";

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



export default function Bebidas(props){

    return (
        <div class="secao">

            <div class="titulo">Agora, a bebida</div>

            <div class="opcoes bebidas">
                {beverajeOption.map((item) =>

                    <CadaBebida dish={item.option} 
                    desc={item.description} 
                    price={item.price} 
                    image={item.image} 
                    title={item.title} 
                    beverajeOption={beverajeOption} 
                    isSelected={item.isSelected} 
                    escolhidoBebida={props.escolhidoBebida} 
                    setEscolhidoBebida={props.setEscolhidoBebida} />
                )}
            </div>
        </div>

    )

                }