import React from 'react';

const Product = (value) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh'
            }}
        >
            <h1>{value.name}</h1>
            /*<h2>{value.discount}</h2>*/
            <h2>{value.price}</h2>
        </div>
    );
};

export default Product;