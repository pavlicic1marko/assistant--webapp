import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import Rating from '../components/Rating'
import { useParams } from 'react-router-dom';
import axios from 'axios'


function TodoScreen({match}) {
    const todoNumber = useParams();

    const [todo, setTodo] = useState([])

    useEffect(() => {
      async function fetchTodos(){
        const {data} = await axios.get(`http://127.0.0.1:8001/api/todo/products/${todoNumber.id}`)
        setTodo(data)
      }
  
      fetchTodos()
  
    },[])

    return (
         <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{todo.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={todo.rating} text={`${todo.numReviews} reviews `} colour={'#f8e825'}/>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price: ${todo.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description: {todo.description}
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
                                    <strong>${todo.price}</strong>
                                </Col>
                            </Row>
                            </ListGroup.Item>
                        </ListGroup>

                        <ListGroup variant='flush'> 
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        {todo.countInStock > 0 ? 'In Stock': 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button className='btn-blockl' disabled={todo.countInStock == 0} type='button'>Delete TODO</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>

  )
}

export default TodoScreen