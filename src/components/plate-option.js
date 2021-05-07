import React from 'react'
import CadaPrato from './plateteste'

export default function PlateJSX(props){
    //const [check,setCheck] = React.useState['.escondido']
    //console.log(props)
    //const {check,setCheck,quantity,setQuantity} = props
   
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

            /*    function chooseItem(){
                    
                 setCheck('ban')
                          
                    
                    
                   

                }

                function add(){
                    setQuantity(quantity+1)
                }

                function subtract(){
                    if(quantity>0){
                    setQuantity(quantity-1)
                    }
                    if(quantity===0){
                        setCheck('x')
                        setQuantity(1)
                    }

                    
                }
        */
        
                
            return(
                plateOption.map((item) => {
                    <CadaPrato option={item.option} image={item.image} title={item.title} description={item.description} price={item.price} id={item.id}/>
                })

            )
            
           
}



