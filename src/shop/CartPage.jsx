import React, {useEffect,useState} from 'react'

const CartPage=()=>{
    const [cartItems, setCartItems] =useState([]);
    useEffect(()=>{
        //fetch cart item from local storage
        const storedCartItems=JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(storedCartItems);
    }, []);

    //calculate price

    const calculateTotalPrice= (item)=>{
       return item.price  * item.quantity;
    };

    //handle quantity increase
    const handleIncrease=(item)=>{
        item.quantity += 1;
        setCartItems([...cartItems]);

        //update local storage with raw cart items
        localStorage.setItem("cart" ,JSON.stringify(cartItems));

    };

    //handle quantity increase
    const handleDecrease=(item)=>{
       if (item.quantity >1 ){
        item.quantity -= 1;
        setCartItems([...cartItems]);
         //update local storage with raw cart items
         localStorage.setItem("cart" ,JSON.stringify(cartItems));
       }
    };
    //handle item remove
    const  handleRemoveItem=(item)=>{
        const updatedCart = cartItems.filter((cartItem)=> cartItem.id !== item.id);

        //update new cart
        setCartItems(updatedCart);
        updateLocalStorage(updatedCart)

    }

    const updateLocalStorage=(cart)=>{
        localStorage.setItem("cart" ,JSON.stringify(cart))
    }
    
    //cart subtotal
    const cartSubTotal =cartItems.reduce((total , item)=>{
        return total + calculateTotalPrice(item); 
    });

    //order total
    const orderTotal=cartSubTotal;

    
return(
    <div>Cart Page</div>
)
}

export default CartPage;