import React, { useState } from "react";
import productData from "../products.json";
import { Link } from "react-router-dom";
import SelectedCategories from "../components/selectedCategories";

const title = (
  <h2>
    Search Your One From <span>Thousands</span> of Products
  </h2>
);
const desc = "We have the largest collection of products";

const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);

  //Filtering function
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);
  };

  const filtered = productData.filter((product) =>
    product.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner- content">
          {title}
          <form
            className="search-box"
            style={{
              position: "relative",
              display: "inline-block",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc", // Input-like border
                borderRadius: "5px",
                padding: "5px",
                width: "100%",
                background: "#fff",
              }}
            >
              {/* Smaller Dropdown Inside Input Bar */}
              <div style={{ flex: "0 0 auto", marginRight: "5px" }}>
                <SelectedCategories select={"all"} />
              </div>

              {/* Search Input Takes Full Space */}
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search your product"
                value={searchInput}
                onChange={handleSearch}
                style={{
                  flex: "1",
                  border: "none",
                  outline: "none",
                  padding: "5px",
                  fontSize: "16px",
                }}
              />

              {/* Search Button Inside Input */}
              <button
                type="submit"
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <i className="icofont-search"></i>
              </button>
            </div>
          </form>

          <p>{desc}</p>
          <ul className="lab-ul">
            {searchInput &&
              filteredProducts.map((product, i) => (
                <li key={i}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
