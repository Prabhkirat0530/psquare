import React from 'react'
import { Link } from 'react-router-dom'
import Product from './Product1'

function Home() {
    return (
        <>
            <div className="container">

                <div className="card rounded-0 border-0 text-center bg-light m-5 p-3">
                    <p className='text-danger fw-bold fs-4'>Sale Starting Soon</p>
                    <p className='text-muted text-center'><small>Member only: 10% off 1st purchase + <mark>Free shipping</mark> over Rs 999.</small></p>
                </div>


                {/* Cards */}
                <div className="card rounded-0 border-0 m-5">
                    <img src="https://images.unsplash.com/photo-1493912089890-b3098ec6d959?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" className="card-img rounded-0 border-0" alt="..." />
                    <div className="p-5 text-white text-center position-absolute bottom-0 start-50 translate-middle-x overflow-hidden">
                        <h1 className="card-title" style={{ fontSize: "16vh", fontFamily: "sans-serif", fontWeight: "bold" }}>MEN's WEAR</h1>
                        <button className="btn btn-lg text-black bg-light m-5 border border-5 rounded-5 border-warning"><Link to="/mens" className='text-decoration-none text-dark'>Shop Now</Link></button>
                    </div>
                </div>
                <div className="card rounded-0 border-0 m-5">
                    <img src="https://images.unsplash.com/photo-1507702553912-a15641e827c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80" className="card-img rounded-0 border-0" alt="..." />
                    <div className="p-5 text-white text-center position-absolute bottom-0 start-50 translate-middle-x overflow-hidden">
                        <h1 className="card-title" style={{ fontSize: "16vh", fontFamily: "sans-serif", fontWeight: "bold" }}>Women's Wardrobe</h1>
                        <button className="btn btn-lg text-black bg-light m-5 border border-5 rounded-4 border-danger-emphasis"><Link to="/womens" className='text-decoration-none text-dark'>Shop Now</Link></button>
                    </div>
                </div>



                <div className="px-5 mx-0 row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <Product
                            id="12343242"
                            title="Men's sneakers - 447"
                            price={12000}
                            description="Sneaker for the style you always wanted."
                            image="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        />
                    </div>
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
                    <div className="col">
                        <Product
                            id="12343242"
                            title="Sunglasses - 109"
                            price={1900}
                            description="Glasses with no purpose but to look cool."
                            image="https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        />
                    </div>
                </div>



                <div className="card rounded-0 border-0 m-5">
                    <img src="https://images.unsplash.com/photo-1647221598272-9aa015392c81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80" className="card-img rounded-0 border-0" alt="..." />
                    <div className="card-img-overlay p-5 text-center mt-5">
                        <h1 className="card-title pt-4 fw-bolder"><b>Gift Someone Special</b></h1>
                        <p className="card-text">Let someone know they are Special</p>
                        <button className="btn border border-3 rounded-5 border-danger"><small>Shop Now</small></button>
                    </div>
                </div>
            </div>







            {/* Magazine */}
            <div style={{ backgroundColor: "#FBEED9" }} className="mx-0 mb-5 text-center w-100 p-5 pb-0">
                <h1 className='fw-bolder'>MAGAZINE</h1>
                <p className='text-muted'><small>A WORLD OF INSPIRATION</small></p>

                {/* Magazine cards */}
                <div className="row row-cols-1 row-cols-md-3 g-4 p-5 mx-5">
                    <div className="col">
                        <div className="card border-0 rounded-0 h-100">
                            <img src="https://images.unsplash.com/photo-1671371503204-0b04e1e82cb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" className="card-img-top border-0 rounded-0" alt="..." />
                            <div className="card-body">
                                <h6 className="card-text">Inside Psquare</h6>
                                <h4 className="card-title"><b>Men's wardrobe</b></h4>
                            </div>
                            <a href="/" className="card-link p-4 text-decoration-none text-black fw-lighter">Read the Story &#8594;</a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-0 rounded-0 h-100">
                            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" className="card-img-top border-0 rounded-0" alt="..." />
                            <div className="card-body">
                                <h6 className="card-text">Inside Psquare</h6>
                                <h4 className="card-title"><b>Our Design Story</b></h4>
                            </div>
                            <a href="/" className="card-link p-4 text-decoration-none text-black fw-lighter">Read the Story &#8594;</a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-0 rounded-0 h-100">
                            <img src="https://images.unsplash.com/photo-1523742348304-8e67f3cafc08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" className="card-img-top border-0 rounded-0" alt="..." />
                            <div className="card-body">
                                <h6 className="card-text">Inside Psquare</h6>
                                <h4 className="card-title"><b>Simple & Sleek</b></h4>
                            </div>
                            <a href="/" className="card-link p-4 text-decoration-none text-black fw-lighter">Read the Story &#8594;</a>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Home