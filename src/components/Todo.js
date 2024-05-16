import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Todo({todo}) {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/todo/${todo._id}`}>
            <Card.Img src={todo.image}/> 
        </Link>
            <Card.Body>
                <Link to={`/todo/${todo._id}`}>
                    <Card.Title as='div'>
                        <strong>{todo.name}</strong>
                    </Card.Title> 
                </Link>
                <Card.Text as ='div'>
                    <div className='my-3'>
                        <Rating value={todo.rating} text={`${todo.numReviews} reviews` } color={'#f8e825'}/>
                    </div>
                </Card.Text>
                <Card.Text as ='h3'>
                    {todo.price}
                </Card.Text>

            </Card.Body>
    </Card>
  )
}

export default Todo