import React from "react";
import '../AdressDetails/AdressDetails.css'
import { Addressumary } from "../service/dataservices";

function AdressDetails(props){
    const[radio,setradio] = React.useState("")
    const[switchorder,setswitchorder] = React.useState(false)

  //  const fullnameinput = React.useRef(null);
    const fulladdressinput = React.useRef(null);
    const city = React.useRef(null);
    const state = React.useRef(null);

    const handleradio = (e) => {
      //  console.log(e.target.value)
        setradio(e.target.value)

    }

    const handleContinue = () => {
        let continueobj = {
            
                addressType: radio,
                fullAddress: fulladdressinput.current.value,
                city: city.current.value,
                state: state.current.value    
        }
        Addressumary(continueobj).then((response) => {
           // console.log(response)

           setswitchorder(true)
           props.ListenToordersummary(true)

        }).catch((error) => {
            console.log(error)

        })
        
    }
    return(
        <div className="CustomerDetails">
            <div className="Addnew">
                <h3 className="customer">Customer Details</h3>
                <p className="AddnewAdress">Add New Address</p>
            </div>
            <div className="customerfulldetails">
                <div className="fullnamedetails">
                    <div className="fullname">
                        <label className="fullname">Full Name</label>
                        <input type="text" className="fullnameinput"/>
                    </div>
                    <div className="Mobilenum">
                        <label className="labelnum">Mobile Number</label>
                        <input type="text" className="inputnum" />
                    </div>
                </div>
                <label className="labeladdress">Address</label>
                <input type= "text" className="addressinput" ref={fulladdressinput}/>
                <div className="fullplacedetails">
                    <div className="citytown">
                        <label className="citylabel">city/town</label>
                        <input type="text" className="cityinput" ref={city}/>
                    </div>
                    <div className="state">
                        <label className="statelabel">State</label>
                        <input type="text" className="inputstate" ref={state}/>
                    </div>
                </div>
                <label className="type">Type</label>
                <div className="radio"onClick={handleradio}>
                <input type="radio" className="home" value="Home"  name="type" /> Home
                <input type="radio" className="work" value="Work" name="type"/> work
                <input type="radio" className="orther" value="Orther"  name="type"/> Orther

                </div>  
               
               
            </div>
            {
                !switchorder &&  <button className="continue" onClick={handleContinue}>Continue</button>

            }
           

        </div>
    )
}
export default AdressDetails