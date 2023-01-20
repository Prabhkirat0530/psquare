import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    getCartTotal,
    removeItem,
    decreaseItemQuantity,
    increaseItemQuantity,
} from "../Features/cartSlice";

const CartPage = () => {
    const { cart, totalQuantity, totalPrice } = useSelector(
        (state) => state.allCart
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);

    return (
        <div>
            <section className="h-100 gradient-custom">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center my-4">
                        <div className="col-md-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Cart - {cart.length} items</h5>
                                </div>
                                <div className="card-body">
                                    {cart?.map((data) => (
                                        <div className="row">
                                            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                                <div
                                                    className="bg-image hover-overlay hover-zoom ripple rounded"
                                                    data-mdb-ripple-color="light"
                                                >
                                                    <img
                                                        src={data.img}
                                                        className="w-100"
                                                        alt="Blue Jeans Jacket"
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                                <p>
                                                    <strong>{data.title}</strong>
                                                </p>

                                                <button
                                                    type="button"
                                                    className="btn btn-danger btn-sm me-1 mb-2"
                                                    data-mdb-toggle="tooltip"
                                                    title="Remove item"
                                                    onClick={() => dispatch(removeItem(data.id))}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                                <div
                                                    className="d-flex mb-4"
                                                    style={{ maxWidth: "300px" }}
                                                >
                                                    <button
                                                        className="btn btn-light border px-3 me-2"
                                                        onClick={() =>
                                                            dispatch(decreaseItemQuantity(data.id))
                                                        }
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                                                        </svg>
                                                    </button>

                                                    <div className="form-outline">
                                                        <fieldset disabled>

                                                            <input
                                                                id="form1"
                                                                min="0"
                                                                name="quantity"
                                                                value={data.quantity}
                                                                className="form-control"
                                                                onChange={() => null}
                                                            />
                                                        </fieldset>
                                                        <label className="form-label text-muted" for="form1">
                                                            Quantity
                                                        </label>
                                                    </div>

                                                    <button
                                                        className="btn btn-light border px-3 ms-2"
                                                        onClick={() =>
                                                            dispatch(increaseItemQuantity(data.id))
                                                        }
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                                        </svg>
                                                    </button>
                                                </div>

                                                <p className="text-start text-md-center">
                                                    <strong>{data.price}</strong>
                                                </p>
                                            </div>
                                            <hr className="my-4" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h5 className="mb-0">Summary</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                            Total Quantity
                                            <span>{totalQuantity}</span>
                                        </li>

                                        <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                            <div>
                                                <strong>Total amount</strong>
                                            </div>
                                            <span>
                                                <strong>{totalPrice}</strong>
                                            </span>
                                        </li>
                                    </ul>

                                    <button
                                        type="button"
                                        className="btn btn-danger btn-lg btn-block"
                                    >
                                        Go to checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CartPage;