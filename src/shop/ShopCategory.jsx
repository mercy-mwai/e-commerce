import React from "react";
import ProductData from "../products.json";

const ShopCategory = ({
  filterItem,
  setItem,
  menuItem,
  setProducts,
  selectedCategory,
}) => {
  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">All Categories</h5>
      </div>
      <div>
        <button onClick={()=>setProducts(ProductData)} className={`m-2 ${selectedCategory=== "All" ? "bg-warning" : "" }`} >All</button>
        {
        menuItem.map((val, id)=>{
          return(
            <button  className={`m-2 ${selectedCategory=== val ? "bg-warning" : "" }`} 
            key={id}
            onClick={()=>filterItem(val)}>
                {val}
            </button>
          )
        })
        }
        </div>
    </>
  );
};

export default ShopCategory;
