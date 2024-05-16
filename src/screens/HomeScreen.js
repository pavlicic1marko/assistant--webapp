import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import Todo from '../components/Todo'
import { useDispatch, useSelector} from 'react-redux'
import {listTodo} from '../actions/todoActions'
import Loader from '../components/Loader'
import Message from '../components/Message'



function HomeScreen() {

  const dispatch = useDispatch()
  const todoList = useSelector(state => state.todoList)
  const {error, loading,  todos} = todoList

  useEffect(() => {
    dispatch(listTodo())
  },[dispatch])


  return (
    <div>
        <h1>TODO List</h1>
        {loading ? <Loader></Loader>
        : error? <Message variant = 'danger'>{error}</Message>
        :
        <Row>
        {todos.map(todo => (
            <Col key={todo._id} sm={12} md={6} lg={4} xl={3}>
                <Todo todo={todo}/>
            </Col>
        ))}
    </Row>
      }

    </div>
  )
}
export default HomeScreen