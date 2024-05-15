import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import Rating from '../components/Rating'
import { useParams } from 'react-router-dom';
import axios from 'axios'


function ProductScreen({match}) {
    const productNumber = useParams();

    const [product, setProduct] = useState([])

    useEffect(() => {
      async function fetchProduct(){
        const {data} = await axios.get(`/api/todo/products/${productNumber.id}`)
        setProduct(data)
      }
  
      fetchProduct()
  
    },[])

    return (
         <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} fluid alt={product.name}/>
                </Col>

                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews `} colour={'#f8e825'}/>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>

                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'> 
                            <ListGroup.Item>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                    <strong>${product.price}</strong>
                                </Col>
                            </Row>
                            </ListGroup.Item>
                        </ListGroup>

                        <ListGroup variant='flush'> 
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock': 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button className='btn-blockl' disabled={product.countInStock == 0} type='button'>Delete TODO</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>

  )
}

export default ProductScreen