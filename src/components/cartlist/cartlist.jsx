import React from "react";
import '../cartlist/cartlist.css'
import location1 from '../../assests/location1.jpg'
import image2 from '../../assests/image2.png'
import { GetCartItems } from "../service/dataservices";
import GetCart from "../getcartpage/getcartpage";
import AdressDetails from "../AdressDetails/AdressDetails";
import { Checkout } from "../service/dataservices";
import OrderSuccessfull from "../Ordersuccessfull/OrderSuccessfull";
import  { Redirect } from 'react-router-dom'
import {withRouter, Link } from 'react-router-dom';


function Cartlist(){
    const [cartitems,setcartitems] = React.useState([])
    const [placeorder,setplaceorder] = React.useState(false)
    const [switchordersum,setswitchordersum] = React.useState(false)
    const [updateqnty,setupdateqnty] = React.useState("")
    const [switchordersucces,setswitchordersucces] = React.useState(false)
   // var [checkobj,setcheckobj] = React.useState([{}])
    const getcartitems = () => {
        GetCartItems().then((response) =>{
            console.log(response);
            setcartitems(response.data.result)
        }).catch((error) => {
            console.log(error);
        })
    }
    const ListenToordersummary = (data) => {
        if(data == true){
            setswitchordersum(true)
        }
    }

    const ListenToRemove = (data) => {
        if(data == true){
            getcartitems()
        }
    }
    const ListenToUpdateqty = (data) => {
        setupdateqnty(data)
    }
    const Handleplaceorder = (e) => {
        console.log(e.target.value)
          setplaceorder(e.target.value)
    }
    const handlecheckout = () => {
        let orders = [];
        for(let i=0;i<cartitems.length;i++){
            let add = {
                product_id : cartitems[i].product_id._id,
                product_name: cartitems[i].product_id.bookName,
                product_quantity : cartitems[i].quantityToBuy,
                product_price: cartitems[i].product_id.price
            }
            orders.push(add);
        }
        let data = {
            orders : orders,
        }

        Checkout(data).then((response) => {
                      console.log(response)
                         setswitchordersucces(true)
                     }).catch((error) => {
                         console.log(error)
                        setswitchordersucces(true)
                     })
                 
       
    

    }
   
   // console.log(props)
    React.useEffect(()=>{
        getcartitems()

    },[])

    return(
       
       <div className="cartlist">
            <div className="getcartpage">
            
                 <div className="mycart">
                     <h3 className="mycarth3"> My Cart</h3>
                     <div className="selectLocation">
                    <img src={location1} alt="not found"/>
                    <h5 className="currnth">Use Current location</h5>
                    </div>
                </div>
           {cartitems.map((item) =>
            <GetCart item = {item}  ListenToRemove={ListenToRemove}/>)
           }
           {
               !placeorder && 
            <div className="aplaceorder">
                    <button className="plceorder" value={true} onClick={Handleplaceorder}>PLACE ORDER</button>
                </div>
           }
       </div>
       {placeorder ? <AdressDetails ListenToordersummary = {ListenToordersummary} ListenToUpdateqty={ListenToUpdateqty}/> : 
       <div className="Addressdetais">
           <p className="add">Adress Details</p>
       </div>
}
   
    
       <div className="ordersummary">
           <p className="ordersum">Order Summary </p>
           <div className="switchorder">
           {
               switchordersum && cartitems.map((item) => <GetCart item = {item} switchordersum={switchordersum} ListenToUpdateqty={ListenToUpdateqty}/>)
           }
           </div>
           {
               switchordersum && 
               <Link to="/ordersuccess">
                <button className="checkout" onClick={handlecheckout}>CHECKOUT</button>
                </Link>
           }
          
       </div>

           {/* {
               switchordersucces && <OrderSuccessfull/>
           } */}
      
       </div>
    )
}

export default Cartlist