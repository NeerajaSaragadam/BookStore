import React from "react";
import '../Ordersuccessfull/OrderSuccessfull.css'
import Orderplacedsuccessfully from "../../assests/Orderplacedsuccessfully.png"
import Footer from "../footer/footer";
import {withRouter, Link } from 'react-router-dom';

function OrderSuccessfull(){
    return(
        <div className="Home">
        <div className="Home-Header">
             <div className="head-container">
                 <button className="educationimg"></button>
                 <p className="bookstore">Bookstore</p>
                 <input className="inputfeildss" type="text"/>
                 <div className="icons">
                     <button className="userprofile"></button>
                     <p className="profile">Profile</p>
                 </div>
                 <div className="icons1">
                     <button className="cart" ></button>
                     <p className="carttext">Cart</p>
                 </div>
             </div>
             
        </div>
        <div className="ordersuccess">
            <div className="orderplaced">
                <img src={Orderplacedsuccessfully} alt="not found"/>
            
            </div>
            <p className="orderpara">
                hurray!!! your order is confirmed the order id is #123456 save the order id for further communication..
                </p>
                

        </div>
        <div className="tabledata">
                <table>
                        <tbody>
                        <tr>
                            <th colSpan="1">Email Us</th>
                            <th colSpan="1">Contact Us</th>
                            <th colSpan="3">Address</th>
                        </tr>
                        <tr>
                            <td>admin@bookstore.com</td>
                            <td>+91 8163475881</td>
                            <td>42, 14th Main, 15th Cross,Bangalore 560034</td>
                        </tr>
                        </tbody>
                        </table>
                </div>
                <Link to="/Home">
                <button className="checkout">Continue Shopping</button>
                </Link>
       <Footer/>
    </div>

    )
}

export default OrderSuccessfull