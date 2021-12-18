import React from "react";
import '../WishListPage/Wishlistpage.css'
import { Getwishlist } from "../service/dataservices";
import image2 from '../../assests/image2.png'
import { Deletewishlist } from "../service/dataservices";

function WishList(){
    const[wishlistarray,setwishlistarray] = React.useState([])

    const getwishlist = () => {
        Getwishlist().then((response)=>{
            //console.log(response)
            setwishlistarray(response.data.result)

        }).catch((error)=>{
            console.log(error)
        })
    
    }
    const Removewishlist = (e) => {
        Deletewishlist(e.target.id).then((response) => {
           // console.log(response)
           getwishlist()
        }).catch((error) => {
            console.log(error)
        })

    }

    console.log(wishlistarray)
        
    React.useEffect(()=>{
        getwishlist()
    },[])

    return(
        <div className="wishlish">
            <div className="mywishlis">
                <h3 className="mywish">My Wishlist</h3>
                {
                    wishlistarray.map((wishitem) =>
            
                        <div className="wishrow">
                            <div className="wishimg">
                            <img src={image2} alt="notfound"/>

                            </div>
                            <div className="wishdetails">
                                <h4 className="wishbook">{wishitem.product_id.bookName}</h4>
                                <p className="wishauthor">by {wishitem.product_id.author}</p>
                                <div className="wishprice">
                                    <h3 className="wprice">Rs {wishitem.product_id.price}</h3>
                                    <p className="disprice">{wishitem.product_id.discountPrice}</p>

                                </div>
                            </div>
                              
                              <button className="removewish" id={wishitem.product_id._id} onClick={Removewishlist}>Remove</button>
                             
                        </div>

                    )
                   
                }

            </div>

        </div>
    )
}

export default WishList