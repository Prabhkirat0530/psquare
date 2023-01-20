import React from 'react'

function Product({ id, title, image, price, description }) {

    return (
        <>
            <div className="card mb-3" style={{ maxWidth: "550px;" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 px-3 mb-4">
                        <div className="card-body">
                            <p className='d-none'>{id}</p>
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text text-muted"><small>{description}</small></p>
                            <p className="card-text"><mark><small>&#8377; </small><strong>{price}</strong></mark></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product