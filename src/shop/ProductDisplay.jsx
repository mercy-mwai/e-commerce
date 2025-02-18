import React, { useState } from 'react';
import { preconnect } from 'react-dom';
import { Link } from 'react-router-dom';

const desc = "Energistia an deliver atactica metrcs after avsionary Apropia transition enterprise an source application emerging per template"

const ProductDisplay = ({item}) => {
    //console.log(item);
    const{ name,id, price,seller,ratingCount,quantity, img}=item;

    const[prequantity, setQuantity]=useState(quantity);
    const [coupon, setCoupon]=useState("");
    const [size, setSize]=useState("Select Size");
    const [color, setColor]=useState("Select Color");

const handleSizeChange=(e)=>{
setSize(e.target.value);
};

const handleColorChange=(e)=>{
    setColor(e.target.value)
};

const handleDecrease=()=>{
if(prequantity >1 ){
    setQuantity(prequantity -1)
}
};
const handleIncrease=()=>{
setQuantity(prequantity +1)
    
};

const handleSubmit=(e)=>{
    e.preventDefault();
    const product={
        id:id,
        img: img,
        name:name,
        price:price,
        quantity:prequantity,
        size:size,
        color:color,
        coupon:coupon,
    }
    //console.log(product)
const existingCart =JSON.parse(localStorage.getItem("cart")) || [];

const existingProductIndex= existingCart.findIndex((item) => item.id === id);

if(existingProductIndex !== -1){
existingCart[existingProductIndex].quantity += prequantity;
}else{
    existingCart.push(product);
}
//update local storage
localStorage.setItem("cart", JSON.stringify(existingCart));

// reset form page
setQuantity(1);
setSize("Select Size");
setColor("Select Color");
setCoupon("");

}
  return (
    <div>
       <div>
       <h4>{name}</h4>
       <p className='rating'>
        <i className='icofont-star'></i>
        <i className='icofont-star'></i>
        <i className='icofont-star'></i>
        <i className='icofont-star'></i>
        <i className='icofont-star'></i>
        <span>{ratingCount} review</span>
       </p>
       <h4>${price}</h4>
       <h6>{seller}</h6>
       <p> {desc}</p>
       </div>
       {/*cart component*/}
       <div>
        <form onSubmit={handleSubmit}>
            {/*Size */}
            <div className='select-product size'>
                <select value={size} onChange={handleSizeChange}>
                    <option >Select Size</option>
                    <option>SM</option>
                    <option>MD</option>
                    <option>LG</option>
                    <option>XL</option>
                    <option>XXL</option>
                </select>
                <i className='icofont-rounded-down'></i>
            </div>
            {/*color */}
            <div className='select-product color'>
                <select value={color} onChange={handleColorChange}>
                    <option >Select Color</option>
                    <option>Pink</option>
                    <option>Ash</option>
                    <option>Red</option>
                    <option>White</option>
                    <option>Blue</option>
                    <option>Black</option>
                </select>
                <i className='icofont-rounded-down'></i>
            </div>

            {/* cart minus or plus */}
            <div className='cart-plus-minus'>
                <div className='dec qtybutton' onClick={handleDecrease}>-</div>
                <input className='cart-plus-minus-box' type='text' name='qtybutton' id='qtybutton' value={prequantity} onChange={(e)=> setQuantity(parseInt(e.target.value , 10))} />
                <div className='inc qtybutton' onClick={handleIncrease}>+</div>
            </div>

            {/*coupon field */}
            <div className='discount-code mb-2'>
                <input type='text' placeholder='Enter Discount Code' onChange={(e)=>setCoupon(e.target.value)} />
            </div>
            {/* button section*/}
            <button type='submit' className='lab-btn'>
               <span> Add to cart</span>
            </button>
            <Link to="/cart-page" className='lab-btn bg-primary'>
            <span>Check Out</span>
            </Link>
        </form>
       </div>
    </div>
  )
}

export default ProductDisplay