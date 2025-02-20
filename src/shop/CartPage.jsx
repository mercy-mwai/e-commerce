import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "../assets/images/shop/del.png";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    //fetch cart item from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  //calculate price

  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  //handle quantity increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);

    //update local storage with raw cart items
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  //handle quantity increase
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);
      //update local storage with raw cart items
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };
  //handle item remove
  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

    //update new cart
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  //cart subtotal
  /*const cartSubTotal =cartItems.reduce((total , item)=>{
        return total + calculateTotalPrice(item); 
    }); */

  const cartSubTotal = Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => total + calculateTotalPrice(item), 0)
    : 0;

  //order total
  const orderTotal = cartSubTotal;

  return (
    <div>
      <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>
                {/* table body */}
                <tbody>
                  {cartItems.map((item, i) => (
                    <tr key={i}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt="" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>
                      <td className="cat-price"> ${item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        {calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* cart top ending..... */}
            {/* cart bottom */}
            <div className="cart-bottom">
              {/*checkout box */}
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    className="cart-page-input-text"
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="Coupon code...."
                  />
                  <input type="submit" value="Apply Coupon" />
                </form>
                <form className="cart-checkout">
                  <input type="submit" value="Update Cart" />
                  <div>Checkout Page</div>
                </form>
              </div>
              {/*checkout box end------ */}
              {/* shopping box */}
              <div className="shiping-box">
                <div className="row ">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shiping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="uk">United Kingdom (UK)</option>
                          <option value="ke">Kenya</option>
                          <option value="sa">South Africa</option>
                          <option value="fr">France</option>
                          <option value="usa">United States Of America</option>
                          <option value="ne">Nepal</option>
                        </select>
                        <div className="select-icon">
                          <span>
                            <i className="icofont-rounded-down"></i>
                          </span>
                        </div>
                      </div>
                      <div className="outline-select shipping-select">
                        <select>
                          <option value="uk">London</option>
                          <option value="ke">Nairobi</option>
                          <option value="sa">Cape Town</option>
                          <option value="fr">Paris</option>
                          <option value="usa">New York</option>
                          <option value="ne">kathmandu</option>
                        </select>
                        <div className="select-icon">
                          <span>
                            <i className="icofont-rounded-down"></i>
                          </span>
                        </div>
                      </div>
                      <input className="cart-page-input-text" type="text" name="postalcode" id="postalcode" 
                      placeholder="PostalCode/ZIP *" />
                      <button type="submit">Update Address</button>
                    </div>
                  </div>
                  <div className="col-md-6 col-12"> 
                        <div className="cart-overview">
                            <h3>Cart Total</h3>
                            <ul className="lab-ul">
                                <li>
                                    <span className="pull-left">Cart SubTotal</span>
                                    <p className="pull-right">$ {cartSubTotal} </p>
                                </li>
                            
                                <li>
                                    <span className="pull-left">Shipping and handling</span>
                                    <p className="pull-right">Free delivery</p>
                                </li>
                                <li>
                                    <span className="pull-left">Order Total</span>
                                    <p className="pull-right">{orderTotal.toFixed(2)}</p>
                                </li>
                                </ul>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
