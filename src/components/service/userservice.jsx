import axios from "axios";

export const UserSignIn = async (obj) => {
    console.log("signobj",obj);
    let response = await axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/registration",obj)
    return response 
}

export const UserSignUp = async (obj) => {
    let response = await axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/login",obj)
    return response
}

