import React from 'react'
//replaces a tags
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'


//instead of props. we are destructuring and just using products directly
const Product = ({ product }) => {
    return (
        <Card className=' my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant="top" />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <Rating 
                    value={product.rating} 
                    text={`${product.numReviews} `}
                    />
                </Card.Text>

                <Card.Text as='h3'>${product.price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
