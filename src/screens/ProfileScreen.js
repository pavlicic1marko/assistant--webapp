import React from 'react'
import { useDispatch, useSelector} from 'react-redux'


function ProfileScreen() {
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
  return (
    <div>
        <h1>Profile Info:</h1>
        <h5>user email: {userInfo.email} </h5>
        <h5>first name:{userInfo.name}</h5>
        <h5>Admin:{userInfo.isAdmin? 'YES': 'NO'}</h5>
    </div>
  )
}

export default ProfileScreen