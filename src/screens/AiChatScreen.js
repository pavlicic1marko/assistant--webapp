import React, { useState, submitHandler } from 'react'
import { Form, Button } from 'react-bootstrap'


function AiChatScreen() {

  const [question, setQuestion] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('this is a submit test')
}


  return (
    <div>
            <h1>Ask ChatGPT</h1>
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='email'>
                    <Form.Label>Your Question:</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='type question for AI here'
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>


                <Button type='submit' variant='primary'>
                    ASK
                </Button>
            </Form>
    </div>
  )
}

export default AiChatScreen