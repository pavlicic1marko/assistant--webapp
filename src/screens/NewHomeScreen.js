import React from 'react'
import { useDispatch, useSelector} from 'react-redux'

function NewHomeScreen() {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
  return (
    <div>
        <h2>Welcome {userInfo ? (<h5>{userInfo.name}</h5>):(<h5></h5>)} to the AI App</h2>
    </div>
  )
}

export default NewHomeScreen