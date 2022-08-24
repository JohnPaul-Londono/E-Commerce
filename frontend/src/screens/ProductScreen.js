import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = () => {
    //use of params allows us to not destructure even though we are using a hard code
    const params = useParams();
    const product = products.find((p) => p._id === params.id)

    return (
        <div>
            <h1>{product.name}</h1>
            <Link className='btn btn-light my-3' to='/'>
                Go back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating
                                value={product.rating}
                                text={`${product.numReviews} reviews`}
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>Price: ${product.price}</p>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <p>Description: ${product.description}</p>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <p> Price:</p>
                                    </Col>
                                    <Col>
                                        <p>${product.price}</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        <p> Status:</p>
                                    </Col>
                                    <Col>
                                        <p>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className='btn-block' type='button' disabled={product.countInStock === 0}>
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>

    )

}

export default ProductScreen
