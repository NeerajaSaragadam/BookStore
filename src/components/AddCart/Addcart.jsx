import React from "react";
import '../AddCart/AddCart.css';
import image2 from '../../assests/image2.png'
import {GetCartItems} from '../service/dataservices'
import {GetProductId} from '../service/dataservices'
import {Putcartitem} from '../service/dataservices'
import { Postwishlist } from "../service/dataservices";


function AddCart(props){
    console.log(props);
    const [getcartid,setgetcartid] = React.useState([])
    const [gettingcartid,setgettingcartid] = React.useState([])
    const [quantity,setquantity] = React.useState()
   // const [switchwishlist,setswitchlist] = React.useState(false)
    
    const getcartitems = () => {
        GetCartItems().then((response) =>{
            console.log(response);
           let filterArray = response.data.result.filter(function(cart){
                if(props.booklist._id == cart.product_id._id){
                    setgettingcartid(cart._id)
                    setquantity(cart.quantityToBuy)
                    return cart
                } 
                
            })
            setgetcartid(filterArray);
            
           
        }).catch((error) => {
            console.log(error);
        })
    }
    const getProductId = () => {
        // let productobj = {
        //     product_id : props.booklist._id
            
        //    }
        //   console.log(productobj)
           GetProductId(props.booklist._id).then((response) => {
               console.log(response)
               getcartitems()
           }).catch((error) => {
               console.log(error)
           })

    }
    const increment = () => {
        let Cartidobj = {
            id : gettingcartid,
            quantityToBuy : quantity +1
        }
        Putcartitem(Cartidobj).then((response)=> {
            console.log(response)
            getcartitems()
        }).catch((error) => {
            console.log(error)
        })
        
    }
    const decrement = () => {
        let Cartidobj = {
            id : gettingcartid,
            quantityToBuy : quantity -1
        }
        Putcartitem(Cartidobj).then((response)=> {
            console.log(response)
            getcartitems()
        }).catch((error) => {
            console.log(error)
        })

    }
    const wishlist = (e) => {
        Postwishlist(e.target.id).then((response) => {
            console.log(response)
            props.ListenToWishlist(true)
        }).catch((error)=>{
            console.log(error)
        })
        
        
    }
    console.log("gettingcartid",getcartid)
    console.log("quantity",quantity)
    
     React.useEffect(()=>{
         getcartitems()
     },[])
    return(
        <div className="BookImage">
            <div className="ImageCoumn">
            <div className="imgborder">
                <div className="bkimg">
                <img src={image2}/>
                </div>
               
            </div>
            <div className="CartWishlist">
                {
                    (getcartid.length!==0) ? (
                        <div className="addcart">
                            <div className="minus" onClick={decrement}>-</div>
                            <div className="itemss">{quantity}</div>
                            <div className="plus" onClick={increment}>+</div>
        
                        </div>) :  <button className="Addtobag" onClick={getProductId}>ADD TO BAG</button>

                }
            
              
               <button className="wishlist" id={props.booklist._id} onClick={wishlist}>WISHLIST</button>
            </div>
            </div>
            <div className="bkname">
                <h2 className="bknme">{props.booklist.bookName}</h2>
                <p className="athrname">by {props.booklist.author}</p>
                <div className="rtng">
                   <button className="rtngbtn">4.5*</button>
                   <p className="qnty">({props.booklist.quantity})</p>
                   </div>
                   <div className="prcediv">
                       <h2 className="prce">Rs.{props.booklist.price}</h2>
                       <p className="dscntprce">Rs.{props.booklist.discountPrice}</p>
                   </div>
                   <hr/>
                   <h4 className="bookdetails">Book Details</h4>
                   <p className="para">
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                    remaining essentially.
                   </p>
                   <hr/>
                   <h4 className="customerfeedback">Customer Feedbackk</h4>
                   <div className="overallrating">
                       <p className="overallratingpara">overallrating</p>
                       <div className="star">
                       <span style={{fontSize:"20px",marginRight:"15px"}}>&#9734;</span>
                       <span style={{fontSize:"20px",marginRight:"15px"}}>&#9734;</span>
                       <span style={{fontSize:"20px",marginRight:"15px"}}>&#9734;</span>
                       <span style={{fontSize:"20px",marginRight:"15px"}}>&#9734;</span>
                       <span style={{fontSize:"20px",marginRight:"15px"}}>&#9734;</span>
                       </div>
                       <input type="text" className="reviewinput" placeholder="write your revie"/>
                       <button className="submits">SUBMIT</button>
                   </div>
                   <div className="onerating">
                       <h4 className="oneratingh">Aniket Chile</h4>
                       <div className="stars">
                       <span style={{fontSize:"20px",marginRight:"15px"}}>&#9734;</span>
                       <span style={{fontSize:"20px",marginRight:"15px"}}>&#9734;</span>
                       <span style={{fontSize:"20px",marginRight:"15px"}}>&#9734;</span>
                       <span style={{fontSize:"20px",marginRight:"15px"}}>&#9734;</span>
                       <span style={{fontSize:"20px",marginRight:"15px"}}>&#9734;</span>
                       </div>
                       <p className="oneratingpara">
                       Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking. Chanakya has written on many different topics and his writings are succinct.
                       </p>

                   </div>
            </div>

        </div>
    )
}

export default AddCart