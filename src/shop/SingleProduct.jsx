import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const SingleProduct = () => {
    const [product, setProduct]=useState([]);
    const {id}=useParams();
    //console.log(id)
    useEffect( ()=>{
        fetch("/src/products.json").then(response=> response.json()).then(productData=>setProduct(productData))
    }, []);

const result =product.filter((p)=> p.id===id);
console.log(result)

  return (
    <div>
        <PageHeader title={"OUR SHOP SINGLE"} curPage={"Shop/ SingleProduct"} />
        <div className='shop-single padding-tb aside-bg'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className='col-lg-8 col-12'>
                        <article>
                            <div className="product-details">
                                <div className='row align-items-center'>
                                    <div className='col-md-6 col-12'>Image</div>
                                    <div className='col-md-6 col-12'>Details</div>
                                </div>
                            </div>

                            {/*reviews*/}
                            <div className="review">
                                Reviews
                            </div>
                        </article>
                    </div>

                    {/*right side*/}
                    <div className='col-lg-4 col-12'>Right Side</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct