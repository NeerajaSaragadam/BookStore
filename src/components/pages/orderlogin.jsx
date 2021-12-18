import React from "react";
import '../css/orderlogin.css'
import Singup from "../signup/signup";
import Login from "../login";

function OrderLogin(){

    const [switchloginsignup,setswitchloginsignup] = React.useState(false)

    const ListenToSignup = (data) => {
        if(data == true){
            setswitchloginsignup(true)
        }else if(data == false){
            setswitchloginsignup(false)
        }
    }
    return(
        
            <div className="main-container">
                {
                    switchloginsignup ? <Singup ListenToSignup= {ListenToSignup}/> : <Login ListenToSignup= {ListenToSignup} />
                }
            </div>

        
    )
}

export default OrderLogin