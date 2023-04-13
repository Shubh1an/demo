import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { getUser } from '../../utils/genericFunc'
import { Roles } from '../../utils/RolesEnum'
const AdminPage = () => {
    const [formData,setFormData]= useState({})
    const [errorData,setErrorData]= useState({})
    const navigate = useNavigate()
    const handleChange=(e)=>{
        console.log(e.target.name,e.target.value)
        let name=e?.target?.name
        let value=e?.target?.value
        setFormData({...formData,[name]:value})
        if(errorData[name]){
            setErrorData({...errorData,[name]:false})
        }
    }
    const handleSubmit=(e)=>{
        e?.preventDefault()
        for(let key in formData){
            if(!formData[key]){
               setErrorData({...errorData,[key]:true})
            }
        }
      if(!errorData?.username&&!errorData?.password){
       
        let user= getUser(formData?.username)
        if(user?.role !==Roles?.Admin) return toast.error("Invalid User")
        if(user.password !==formData?.password){
            return toast.error("Incorrect Password")
        }
       else{
        toast.success('Logged In Succesfully')
        localStorage.setItem("credentials",JSON.stringify(user))
        navigate("/",{replace:true})
       }
      }
      else return toast.error("Please fill all Details")
    }
 
  return (
    <div className='d-flex justify-content-center align-items-center h-100vh'>
         <div className='mx-250 w-100 m-auto shadow p-3 bg-white rounded"'>
             <form onSubmit={handleSubmit}>
                     <h3 className='text-center'>Sign In</h3>
             <div className="my-3">
              <label>UserName</label>
              <input
                type="text"
                name='username'
                className="form-control"
                placeholder="Enter email"
                onChange={handleChange}
              />
                     </div>
                     <div className="mb-3">
              <label>Password</label>
              <input
              name='password'
                type="password"
                className="form-control"
                placeholder="Enter password"
                onChange={handleChange}
              />
                     </div>
                     <div className="mb-3">
             
                     </div>
                     <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
                     </div>
                   </form>
         </div>
    </div>
  )
}

export default AdminPage