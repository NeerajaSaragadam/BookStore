import React from "react";
import './css/login.css'
import TextField from '@mui/material/TextField'
// import './assests/onlinebookshopping.png'
import {UserSignUp} from './service/userservice'
import onlinebookshopping from '../assests/onlinebookshopping.png'
import { useMediaQuery } from 'react-responsive'
// import TextField from '@mui/material/TextField'
function Login(props){

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 765px)' })
    const isTablet = useMediaQuery({ query: '(min-width: 766px)' })

const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const [emailerror,setemailerror] = React.useState(false)
const [emailhelper,setemailhelper] = React.useState('')
const [pswderror,setpswderror] = React.useState(false)
const [pswdhelper,setpswdhelper] = React.useState('')
const [emailpassobj,setemailpassobj] = React.useState({email:"",password:""})

    const changeSignUp = ()=>{
        props.ListenToSignup(true)
    }

    const takeEmail = (event) => {
        setemailpassobj({...emailpassobj,email:event.target.value})
    } 
    const takePswds = (event) => {
        setemailpassobj({...emailpassobj,password:event.target.value})
    }
    const OnSubmit = () => {
        console.log("email",emailpassobj)
        if(emailRegex.test(emailpassobj.email)){
            setemailerror(false)
            setemailhelper("")
        }else{
            setemailerror(true)
            setemailhelper("enter correct email")
        }
        if(passwordRegex.test(emailpassobj.password)){
            setpswderror(false)
            setpswdhelper("")
        }else{
            setpswderror(true)
            setpswdhelper("enter correct password")
        }

        UserSignUp(emailpassobj).then(function(response){
            console.log(response)
            localStorage.setItem("token",response.data.result.accessToken)
        }).catch(function(error){
            console.log(error)
        })

    }
    return(
        <div>
            {isTablet && 
             <div className="LoginmainContainer">
                 <div className="loginContainer">
                     <div className="section">
                         <div className="imgsection">
                             <div className="imgs">
                             <img src={onlinebookshopping}/>
                             <h2 className="headg">ONLINE BOOK SHOPPING</h2>
                             </div>
                         </div>
                          <div className="logincard">
                              <div className="lgnbtns">
                                  <button className="loginbtn">LOGIN</button>
                                  <button className="signinbtn" onClick={changeSignUp}>SIGNUP</button>
                              </div>
                              <div className="inputfeilds">
                                  <label className="emailid">Email Id</label>
                                  <TextField id="outlined-basic" className="emailinput" onChange={takeEmail} error={emailerror} helperText={emailhelper} label="" variant="outlined" size="small" style={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}/>
                                  {/* <input className="emailinput" type="text" error={emailerror} helperText={emailhelper} onChange={takeEmail}/> */}
                                  <label className="paswd">Password</label>
                                  {/* <input className="pawdinput" type="text" error={pswderror} helperText={pswdhelper} onChange={takePswds}/> */}
                                  <TextField id="outlined-basic" className="pawdinput" onChange={takePswds} error={pswderror} helperText={pswdhelper} label="" variant="outlined" size="small" style={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}/>

                                  <label className="frgtpswd">Forgot Password?</label>
                                  <button className="lgnbtn" onClick={OnSubmit}>Login</button>
            
                                  <label className="or">OR</label>
                                  
                        
                              </div>
                              <div className="googlebtn">
                              <button className="google">Facebook</button>
                              <button className="facebook">Google</button>
                              </div>

                          </div>
                     </div>

                 </div>

             </div>
     }
     {isTabletOrMobile && 
      <div className="logincardM">
      <div className="lgnbtns">
          <button className="loginbtn">LOGIN</button>
          <button className="signinbtn" onClick={changeSignUp}>SIGNUP</button>
      </div>
      <div className="inputfeilds">
          <label className="emailid">Email Id</label>
          <TextField id="outlined-basic" className="emailinput" onChange={takeEmail} error={emailerror} helperText={emailhelper} label="" variant="outlined" size="small" style={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}/>
          {/* <input className="emailinput" type="text" error={emailerror} helperText={emailhelper} onChange={takeEmail}/> */}
          <label className="paswd">Password</label>
          {/* <input className="pawdinput" type="text" error={pswderror} helperText={pswdhelper} onChange={takePswds}/> */}
          <TextField id="outlined-basic" className="pawdinput" onChange={takePswds} error={pswderror} helperText={pswdhelper} label="" variant="outlined" size="small" style={{display:"flex",flexDirection:"column",justifyContent:"flex-start"}}/>

          <label className="frgtpswd">Forgot Password?</label>
          <button className="lgnbtn" onClick={OnSubmit}>Login</button>

          <label className="or">OR</label>
          

      </div>
      <div className="googlebtn">
      <button className="google">Facebook</button>
      <button className="facebook">Google</button>
      </div>
      </div>

     }
        </div>
    )
}

export default Login