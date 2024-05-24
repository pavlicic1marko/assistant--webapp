import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
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
                            <h4>Title:</h4>
                            <h6>{todo.title}</h6>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Created At: ${todo.createdAt}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description: {todo.description}
                        </ListGroup.Item>

                    </ListGroup>
                    <Button className='btn-block1' type='button'>Delete TODO</Button>

                </Col>
            </Row>
        </div>

  )
}

export default TodoScreen