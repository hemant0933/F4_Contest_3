import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/productSlice";
import { add } from "../features/cartSlice";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    // console.log(state.app.products,"state....");
    return state.app;
  });

  const AddToCart = (item) => {
    toast("Added to cart", {
      icon: "🛒",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
    dispatch(add(item));
  };

  useEffect(() => {
    dispatch(getAllProducts());
  },[]);

  if (data.loading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  if (data.error != null) {
    return <h1>{data.error}</h1>;
  }

  return (
    <div className="home">
      <div>
        <Toaster />
      </div>
      <h1 className="heading">All Items</h1>
      <div className="container">
        {Array.isArray(data.products.products) && data.products.products.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <h3>Title : {item.title}</h3>
            <p>Price : {item.price}</p>
            <button onClick={() => AddToCart(item)}>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
