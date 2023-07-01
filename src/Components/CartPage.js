import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../features/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartArray = useSelector((state) => {
    // console.log(state.cart)
    return state.cart;
  });

  const totalAmount = cartArray.reduce((total,item) => total+item.price, 0);

  const RemoveToCart = (item_id) => {
    // console.log(item_id)
    toast.success("Remove from cart", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    dispatch(remove(item_id));
  };
  
  return (
    <div className="home">
      <div>
        <Toaster />
      </div>
      <h1 className="heading">All Cart Items</h1>
      <div className="Cartsection">
        <div className="container2">
          {Array.isArray(cartArray) &&
            cartArray.map((item) => (
              <div className="item" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <h3>Title : {item.title}</h3>
                <p>Price : {item.price}</p>
                <button onClick={() => RemoveToCart(item.id)}>
                  Remove To Cart
                </button>
              </div>
            ))}
        </div>
        <div className="checkOut">
          <h3>Checkout Section</h3>
          <ul>
            {cartArray.map((item) => (
              <li key={new Date().getDate + Math.random()}>
                <span>{item.title}</span>
                <p>$ {item.price}</p>
              </li>
            ))}
          </ul>
          <div className="totalAmount">Total Amount : ${totalAmount}</div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
