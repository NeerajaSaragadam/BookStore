import React from "react";
import '../signup/signup.css';
import {UserSignIn} from '../service/userservice'
import onlinebookshopping from '../../assests/onlinebookshopping.png'
import { useMediaQuery } from 'react-responsive'

function Singup(props){

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 765px)' })
    const isTablet = useMediaQuery({ query: '(min-width: 766px)' })

    const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
    const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
    const firstNameRegex = /[A-Z]{1}[a-z]{2,}/;
    const[emailhelper,setemailhelper] = React.useState("")
    const [emailerror, setEmailerror] = React.useState(false)

    const[passhelper,setpasshelper] = React.useState("")
    const [passerror, setpasserror] = React.useState(false)

    const[fullnamehelper,setfirsthelper] = React.useState("")
    const [fullnameerror, setfirsterror] = React.useState(false)

    const [emailpassobj, setemailpassobj] = React.useState({fullName:"",email:"",password:"",phone:""})
    const ChangeLogin = () => {
        props.ListenToSignup(false)
    }
    const takeFullname = (event)=> {
        setemailpassobj({...emailpassobj, fullName:event.target.value})

    }
    const takeEmail = (event)=> {
        setemailpassobj({...emailpassobj, email:event.target.value})

    }
    const takePaswd = (event) => {
        setemailpassobj({...emailpassobj,password:event.target.value})

    }
    const takeNum = (event) => {
          setemailpassobj({...emailpassobj, phone:event.target.value})
    }
    const onsubmit = () => {
           console.log("clicked");
        UserSignIn(emailpassobj).then(function(response){
            console.log(response);
         }).catch(function(error){
             console.log(error)
         })

    }
    return(
       
        <div>
             {isTablet && 
        <div className="signupContainer">
             <div className="section">
                         <div className="imgsection">
                             <div className="imgs">
                             <img src={onlinebookshopping}/>
                             <h2 className="headg">ONLINE BOOK SHOPPING</h2>
                             </div>
                         </div>
                          <div className="logincard">
                              <div className="lgnbt">
                                  <button className="signlgnbtn" onClick={ChangeLogin}>  
                                     Login
                                  </button>
                                  <button className="signupbtn">SIGNUP</button>
                              </div>
                              <div className="inputfeild">
                                  <label className="fullname">Full Name</label>
                                  <input className="name" onChange={takeFullname} type="text"/>
                                  <label className="Email">Email Id</label>
                                  <input className="inptemail" onChange={takeEmail} type="text"/>
                                  <label className="Passwrd">Password</label>
                                  <input className="Passwrdfeild" onChange={takePaswd} type="text"/>
                                  <label className="mobilenum">Mobile number</label>
                                  <input className="mobilenumfeild" onChange={takeNum} type="text"/>
                                  <button className="signupbtnl" onClick={onsubmit}>Signup</button>

                              </div>
                              

                          </div>
                     </div>

        </div>
        }
        {isTabletOrMobile &&
        <div className="logincardM">
                              <div className="lgnbt">
                                  <button className="signlgnbtn" onClick={ChangeLogin}>  
                                     Login
                                  </button>
                                  <button className="signupbtn">SIGNUP</button>
                              </div>
                              <div className="inputfeild">
                                  <label className="fullname">Full Name</label>
                                  <input className="name" onChange={takeFullname} type="text"/>
                                  <label className="Email">Email Id</label>
                                  <input className="inptemail" onChange={takeEmail} type="text"/>
                                  <label className="Passwrd">Password</label>
                                  <input className="Passwrdfeild" onChange={takePaswd} type="text"/>
                                  <label className="mobilenum">Mobile number</label>
                                  <input className="mobilenumfeild" onChange={takeNum} type="text"/>
                                  <button className="signupbtnl" onClick={onsubmit}>Signup</button>

                              </div>
                              

                          </div>
             }

        
        </div>

    )
}

export default Singup