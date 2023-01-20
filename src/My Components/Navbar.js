import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Media/logo.png'
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../Features/cartSlice";

function Navbar() {

    const { cart, totalQuantity } = useSelector((state) => state.allCart);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);


    return (
        <>

            {/* Logo */}
            <div className="text-center">
                <Link to="/" className=''>
                    <img style={{ width: "150px" }} className='text-center' src={logo} alt='' />
                </Link>
            </div>


            {/* Navbar */}
            <nav style={{ marginTop: "-110px" }} className='navbar text-center mb-5'>


                <div className="mx-3">
                    <Link to="/" className='mx-3 text-decoration-none text-black'>
                        <span>Customer</span>
                    </Link>

                    <Link to="/" className='mx-3 text-decoration-none text-black'>
                        <span>Newsletter</span>
                    </Link>

                    <Link to="/" className='mx-3 text-decoration-none text-black'>
                        <span>Find a Store</span>
                    </Link>
                </div>



                <div className="mx-3">
                    <Link to="/login" className='mx-3 text-decoration-none text-black'>
                        <span>Sign In</span>
                    </Link>

                    <Link to="/" className='mx-3 text-decoration-none text-black'>
                        <span>Your Orders</span>
                    </Link>


                    {/* Cart */}
                    <Link to="/cart">
                        <div className="d-inline mx-3 text-decoration-none text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="pb-1 d-inline bi bi-bag" viewBox="0 0 16 16">
                                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                            </svg>
                            <span className='mx-2 text-decoration-none'>{totalQuantity}</span>
                        </div>
                    </Link>

                </div>
            </nav>


            {/* More links */}
            <div className="container navbar w-25 pt-5">
                <Link to='/mens' className='text-decoration-none text-black'>Men</Link>
                <Link to='/womens' className='text-decoration-none text-black'>Women</Link>
                <Link href='/' className='text-decoration-none text-black'>Kids</Link>
                <Link href='/' className='text-decoration-none text-black'>Divided</Link>
                <Link href='/' className='text-decoration-none text-black'>Sale</Link>
                <Link href='/' className='text-decoration-none text-black'>Sports</Link>
            </div>


        </>
    )
}

export default Navbar