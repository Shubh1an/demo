import React from 'react'
import { useNavigate } from 'react-router'
import { getUser } from '../../utils/genericFunc'
import { Roles } from '../../utils/RolesEnum'

const Header = ({auth}) => {
    const navigate= useNavigate()
    const handleLogout=()=>{
        let user= getUser("")
        localStorage.setItem("credentials",JSON.stringify(user))
        window.location.reload()
    }
    const handleSignIn=()=>{
        navigate("/admin",{replace:true})
    }
  return (
    <div className='d-flex w-100 align-items-center justify-content-between py-4 px-3 bg-black text-white'>
     <p>Welcome {auth?.username}</p>
    {auth?.role===Roles?.Admin? <button className='btn btn-primary text-white' onClick={handleLogout}>Logout</button>:<button className='btn btn-primary text-white' onClick={handleSignIn}>SignIn</button>}
    </div>
  )
}

export default Header