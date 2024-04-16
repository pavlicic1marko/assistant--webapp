import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'
import { useParams } from 'react-router-dom';

function ProductScreen() {
    const match = useParams();
    const product = products.find((p) => p._id == match.id);
    return (
         <div>{product.name}</div>

  )
}

export default ProductScreen