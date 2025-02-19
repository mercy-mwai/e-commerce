import React, { useState } from "react";
import Rating from "../components/Rating";

const reviwtitle = "Add a Review";

let reviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

const Review = () => {
    const [reviewShow, setReviewShow]=useState(true);
  return (
    <>
    <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
       <li className="desc" onClick={() => setReviewShow(!reviewShow)}>Description</li>
       <li className="rev" onClick={() => setReviewShow(!reviewShow)}>Reviews 4</li>
    </ul>

    {/* rev and desc content */}
    <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
            <div className="review-showing">
                <ul className="content lab-ul"> 
                    {
                        reviewList.map((review ,i) =>(
                                <li key={i}>
                                    <div className="post-thumb">
                                        <img src={review.imgUrl} alt="" />
                                    </div>
                                    <div className="post-content">
                                        <div className="entry-meta">
                                            <div className="posted-on">
                                                <a href="#">{review.name}</a>
                                                <p>{review.date}</p>
                                            </div>
                                        </div>
                                        <div className="entry-content">
                                            <p>{review.desc}</p>
                                        </div>
                                    </div>
                                </li>
                        ))
                    }
                </ul>
                    {/* add review field */}
                <div className="client-review" >
                    <div className="review-form">
                        <div className="review-title">
                            <h5>{reviwtitle}</h5>
                        </div>
                        <form action="action" className="row">
                            <div className="col-md-4 col-12">
                                <input type="text" id="name" name="name" placeholder="Full Name *" />
                            </div>
                            <div className="col-md-4 col-12">
                                <input type="email" id="email" name="email" placeholder="Your email *" />
                            </div>
                            <div className="col-md-4 col-12">
                               <div className="rating">
                                <span className="me-2">Rating</span>
                                <Rating />
                               </div>
                            </div>
                            <div className="col-md-12 col-12">
                                <textarea name="message" id="message" rows={8} placeholder="Type here message"></textarea>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="default-button">
                                    <span>Submit Review</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* description */}
            <div className="description">
                <p> Experience the perfect blend of style, functionality, and durability with our premium product. Designed with the modern user in mind, it features high-quality materials that ensure long-lasting performance and maximum comfort. Whether you're using it for daily wear, professional needs, or leisure, this product is built to adapt to your lifestyle seamlessly.  
                Our attention to detail ensures that every component meets the highest industry standards. The sleek and contemporary design not only enhances its visual appeal but also provides a practical, user-friendly experience. With carefully curated features, this product aims to elevate your experience, offering convenience and efficiency at every step.  
                </p>
                <div className="post-item">
                    <div className="post-thumb">
                        <img src="/src/assets/images/shop//01.jpg" alt="" />
                    </div>
                    <div className="post-content">
                        <ul className="lab-ul">
                            <li>Experience the perfect blend of style, functionality, and durability with our premium product.</li>
                            <li>Experience the perfect blend of style, functionality, and durability with our premium product.</li>
                            <li>Experience the perfect blend of style, functionality, and durability with our premium product.</li>
                            <li>Experience the perfect blend of style, functionality, and durability with our premium product.</li>
                            <li>Experience the perfect blend of style, functionality, and durability with our premium product.</li>
                        </ul>
                    </div>
                </div>
                <p> Experience the perfect blend of style, functionality, and durability with our premium product. Designed with the modern user in mind, it features high-quality materials that ensure long-lasting performance and maximum comfort. Whether you're using it for daily wear, professional needs, or leisure, this product is built to adapt to your lifestyle seamlessly.  
                Our attention to detail ensures that every component meets the highest industry standards. The sleek and contemporary design not only enhances its visual appeal but also provides a practical, user-friendly experience. With carefully curated features, this product aims to elevate your experience, offering convenience and efficiency at every step.  
                </p>
            </div>
    </div>
    </>
  )
};

export default Review;
