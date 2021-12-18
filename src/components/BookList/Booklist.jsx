import React from "react";
import '../../components/BookList/Booklist.css'
import '../../assests/image1.png'
import image2 from '../../assests/image2.png'
import Footer from "../footer/footer";




function BookList(props){
    // console.log(props)
    const Showbookdata = (data) => {
        console.log("singlebook",data)
        props.ListenToBookList(data)
        props.ListentoSwitchbook(true);

    }
    

    return(
        <div className="booklist">
            <div className="book" onClick={() => Showbookdata(props.book)}>
               <div className="bookimg">
                   <div className="images">
                  <img src={image2} alt="book"/>
               </div>
               </div>
               <div className="booknames">
                   <h3 className="bookname">{props.book.bookName}</h3>
                   <p className="byauthor">by {props.book.author}</p>
                   <div className="rating">
                   <button className="ratingbtn">4.5*</button>
                   <p className="quantity">({props.book.quantity})</p>
                   </div>
                   <div className="pricediv">
                       <h2 className="price">Rs.{props.book.price}</h2>
                       <p className="discountprice">Rs.{props.book.discountPrice}</p>
                   </div>
               </div>
            </div>
            
        </div>
    )
}

export default BookList