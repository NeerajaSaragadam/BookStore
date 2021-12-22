import React from "react";
import '../Home/HomePage.css'
import education from '../../assests/education.svg'
import BookList from "../BookList/Booklist";
import {GetBooks} from '../service/dataservices';
import AddCart from "../AddCart/Addcart";
import GetCartPage from "../getcartpage/getcartpage";
import { GetCartItems } from "../service/dataservices";
import Cartlist from "../cartlist/cartlist";
import Footer from "../footer/footer";
import WishList from "../WishListPage/Wishlistpage";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


function HomePage(){
   const [booksArray,setbooksArray] = React.useState([])
   const [booklist,setbooklist] = React.useState("");
   const [switchbookcart,setswitchbookcart] = React.useState(false)
   const [switchcartpage,setswitchcartpage] = React.useState(false)
   const [wishlistpage,setwishlistpage] = React.useState(false)
   const [page, setPage] = React.useState(1);

   const [cartitems,setcartitems] = React.useState([])


   const ListentoSwitchbook = (data) =>{
       if(data == true){
           setswitchbookcart(true)
       }

   }

   const getBook = () => {

    GetBooks().then((response) =>{
         console.log("books",response)
        setbooksArray(response.data.result);

    }).catch((error) => {
        console.log(error);

    })
}
   const ListenToBookList = (data)=>{
    //    console.log(data)
       setbooklist(data)
    }
    const ListenToWishlist = (data) => {
        console.log(data)
        setswitchbookcart(false)
        setwishlistpage(data)

    }
    
    const getCartPage = () => {
        console.log("getcartpage")
        setswitchbookcart(false)
        setswitchcartpage(true)

    }
    const swichhomepage = () => {
        
        setswitchbookcart(false)
    }
    const swichcarttohome = () => {
        setswitchcartpage(false)
    }
    const wishtohome = () => {
        setwishlistpage(false)
    }
    const nextpage = (e,value)=>{
      //  console.log(value)
        setPage(value)
    }
    

    React.useEffect(()=>{
        getBook()

    },[])
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
                 <div className="icons1"onClick={getCartPage}>
                     <button className="cart" ></button>
                     <p className="carttext">Cart</p>
                 </div>
             </div>
             
        </div>
        {switchbookcart ? <div className="homebookname" onClick={swichhomepage}><h4>Home/Book(01)</h4></div>:
        switchcartpage ? <div className="homemycart" onClick={swichcarttohome}><h4>Home/Mycart</h4></div> :
        wishlistpage ? <div className="wishhh" onClick={wishtohome}><h4>Home/MyWish</h4></div> :
        <div className="booksrow">
            <h3 className="bookh">Books</h3>
            <div className="selectopt">
                <select>
                    <option>Sort by relevance</option>
                    <option>Price: low to high</option>
                </select>
            </div>
        </div>
}        

            
        <div className="BookList">
        {
            switchbookcart ?  <AddCart booklist={booklist} ListenToWishlist={ListenToWishlist}/> :  
            switchcartpage ? 
            <Cartlist/>:
            wishlistpage ? <WishList/> :
               page == 1 ?
                booksArray.slice(0,8).map((book) => 
                <BookList book={book} ListenToBookList={ListenToBookList} ListentoSwitchbook={ListentoSwitchbook}/>)
                : page == 2 ?
                booksArray.slice(8,16).map((book) => 
                <BookList book={book} ListenToBookList={ListenToBookList} ListentoSwitchbook={ListentoSwitchbook}/>)
                : page == 3 ?
                booksArray.slice(16,24).map((book) => 
                <BookList book={book} ListenToBookList={ListenToBookList} ListentoSwitchbook={ListentoSwitchbook}/>)
                :null


                             
        }
        
    </div>

    <div className="pagination">
      <Stack spacing={2}>
      <Pagination count={5} page={page} onChange={nextpage}/>
      </Stack>
      </div>
   
   <div className="forfooter">
   <Footer/>

   </div>
  
    </div>
   

    )
}

export default HomePage