import axios from "axios";

let configObjForaddNotes1 = {
    headers: {
      
      "x-access-token": localStorage.getItem("token")
    },
  }
  let configObjForaddNotes = {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("token")
    },
  }
  
  export const GetBooks = async() => {

    let response=await axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get/book",configObjForaddNotes1)
    return response
  } 
  export const GetCartItems = async() => {
    console.log(configObjForaddNotes1)

    let response=await axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_cart_items")
    return response
  } 
 
  export const GetProductId = async(data) => {
    console.log(data)
    console.log(configObjForaddNotes)
    // let response = await axios.post("https://new-bookstore-backend.herokuapp.com/bookstore_user/add_cart_item/",data,null,configObjForaddNotes1)
    let response = await axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/add_cart_item/"+data,data,configObjForaddNotes1)
    return response
  }

  export const Putcartitem = async(data) => {
    console.log(data);

    let response = await axios.put(`https://bookstore.incubation.bridgelabz.com/bookstore_user/cart_item_quantity/${data.id}`,data)
    return response
  }

  // export const deletecartitem = async(data) => {
  //   console.log(data);

  //   let response = await axios.delete(`https://new-bookstore-backend.herokuapp.com/bookstore_user/remove_cart_item/${data}`,{},configObjForaddNotes)
  //   return response
  // }

  export const Deletecartitem = async(data) => {
    console.log(configObjForaddNotes1)
    let response = await axios.delete("https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_cart_item/"+data)
    return response
  }

  export const Addressumary = async(data) => {
    let response = await axios.put("https://bookstore.incubation.bridgelabz.com/bookstore_user/edit_user",data,configObjForaddNotes1)
    return response
  }

  export const Checkout = async(data) => {
    let response = await axios.post("https://bookstore.incubation.bridgelabz.com/bookstore_user/add/order",data,configObjForaddNotes1)
    return response
  }
  export const Postwishlist = async(data) => {
    let response = await axios.post(`https://bookstore.incubation.bridgelabz.com/bookstore_user/add_wish_list/${data}`,data,configObjForaddNotes1)
    return response
  }
  export const Getwishlist = async(data) => {
    let response = await axios.get("https://bookstore.incubation.bridgelabz.com/bookstore_user/get_wishlist_items",configObjForaddNotes1)
    return response
  }

  export const Deletewishlist = async(data) => {
    let response = await axios.delete(`https://bookstore.incubation.bridgelabz.com/bookstore_user/remove_wishlist_item/${data}`,configObjForaddNotes1)
    return response
  }