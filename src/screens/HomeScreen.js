import React from 'react'
import products from '../products'
import {Row, Col} from 'react-bootstrap'

function HomeScreen() {
  return (
    <div>
        <h1>Latest Products</h1>
        <Row>
            {products.map(products => (
                <Col key={products._id} sm={12} md={6} lg={4} xl={3}>
                    <h3>{products.name}</h3>
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomeScreen