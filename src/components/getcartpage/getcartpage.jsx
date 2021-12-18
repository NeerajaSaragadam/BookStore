import React from "react";
import '../getcartpage/getcartpage.css'
import location1 from '../../assests/location1.jpg'
import image2 from '../../assests/image2.png'
import {GetCartItems} from '../service/dataservices'
import {GetProductId} from '../service/dataservices'
import {Putcartitem} from '../service/dataservices'
import { Deletecartitem } from "../service/dataservices";

function GetCart(props){
    const [updateqnty,setupdateqnty] = React.useState(props.item.quantityToBuy)
    const [testarray,settestarray] = React.useState([])
   console.log(props)

   const getcartitems = () => {
    GetCartItems().then((response) =>{
        console.log(response);
       let filterArray = response.data.result.filter(function(cart){
            if(props.item.product_id._id == cart.product_id._id){
                setupdateqnty(cart.quantityToBuy)
                // setgettingcartid(cart._id)
                // setquantity(cart.quantityToBuy)
                return cart
            } 
           
            
        })
        settestarray(filterArray)
        
    }).catch((error) => {
        console.log(error);
    })
}
   const increment = (e) => {
       console.log("incremntvalue",e.target.id)
        let Cartidobj = {
        //    id : props.item.product_id._id ,
        id : e.target.id,
           quantityToBuy : props.item.quantityToBuy +1
            //  quantityToBuy : updateqnty + 1
        }
        Putcartitem(Cartidobj).then((response)=> {
            console.log(response)
            getcartitems()
            
        }).catch((error) => {
            console.log(error)
        })
   }
   const decrement = (e) => {
    let Cartidobj = {
        // id : props.item.product_id._id,
        id : e.target.id,
        quantityToBuy : props.item.quantityToBuy -1
    }
    Putcartitem(Cartidobj).then((response)=> {
        console.log(response)
        getcartitems()
        
    }).catch((error) => {
        console.log(error)
    })
    
}
const remove = (e) => {
    Deletecartitem(e.target.id).then((response) => {
        console.log(response)
        props.ListenToRemove(true)
       // getcartitems()
    }).catch((error) => {
        console.log(error)
    })

}
// props.ListenToUpdateqty(updateqnty)
// console.log(updateqnty)
// console.log(testarray)

    return(
       
       
        
        <div>
            <div className="aboutbookrow">
            <div className="cartbookimg">
                <img src={image2} alt=""/>
                </div>
                <div className="aboutbook">
                    <h3 className="abookname">{props.item.product_id.bookName}</h3>
                    <p className="abkauthor">{props.item.product_id.author}</p>
                    <div className="abookprice">
                    <h2 className="price">Rs.{props.item.product_id.price}</h2>
                       <p className="discountprice">Rs.{props.item.product_id.discountPrice}</p>
                    </div>
                    {!props.switchordersum && 
                    <div className="aincrement">
                    <div className="aminus" id={props.item._id} onClick={decrement}>-</div>
                    <div className="aitemss">{updateqnty}</div>
                    <div className="aplus" id={props.item._id} onClick={increment}>+</div>
                    <button className="aremove" id={props.item._id} onClick={remove}>Remove</button>
                    </div>
                   }

                </div>
               
            </div>
            {/* <div className="aplaceorder">
                    <button className="plceorder">PLACE ORDER</button>
                </div> */}
            
         </div>
        
    )
}

export default GetCart