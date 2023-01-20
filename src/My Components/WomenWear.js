import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../Features/cartSlice";
import Product from './Product1';

export default function WomenWear() {

    const items = useSelector((state) => state.allCart.items);
    const dispatch = useDispatch();

    return (
        <>
            <div className="container p-5 mt-3">

                {/* Featured */}
                <div className="px-5">
                    <h1 className='text-center bg-light text-danger mt-3 mb-5 px-5 py-3'><b style={{ fontWeight: '900' }}>Featured</b></h1>
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {/* <div className="col">
                            <Product
                                id="12343242"
                                title="Women's sneakers - 447"
                                price={12000}
                                description="Sneaker for the style you always wanted."
                                image="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            />
                        </div> */}
                        <div className="col">
                            <Product
                                id="12343242"
                                title="Women's Jean - 221"
                                price={2000}
                                description="A stylii comfy fit for you."
                                image="https://images.unsplash.com/photo-1662219708541-3a74d96330eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            />
                        </div>
                        <div className="col">
                            <Product
                                id="12343242"
                                title="Women's sandels - 230"
                                price={8000}
                                description="Sandels to kill your boyfriend."
                                image="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            />
                        </div>
                        {/* <div className="col">
                            <Product
                                id="12343242"
                                title="Sunglasses - 109"
                                price={12000}
                                description="a new product"
                                image="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            />
                        </div> */}
                    </div>
                </div>


                <div className='p-5'>
                    <h1 className='text-center bg-light text-danger mt-3 mb-5 px-5 py-3'><b style={{ fontWeight: '900' }}>New in WOMEN's</b></h1>
                    {items.map((item) => (
                        <div className="card shadow border-0 mb-5">
                            <div className="row g-0 m-0">
                                <div className="col-md-4">
                                    <img src={item.img} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8 mb-4 p-5">
                                    <div className="card-body">
                                        <p className='d-none'>{item.id}</p>
                                        <h5 className="card-title fs-2">{item.title}</h5>
                                        <p className="card-text text-muted fs-4 pb-5 pt-3"><small>{item.description}</small></p>
                                        <p className="card-text fs-3"><mark><small>&#8377; </small><strong>{item.price}</strong></mark></p>
                                    </div>
                                    <button className='btn btn bg-light border ms-3' type='button' onClick={() => dispatch(addToCart(item))}>Add to Basket</button>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </>
    )
}
