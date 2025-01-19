import React, { useState } from 'react'
import "../Signin/Signin.css"
import { Box, Button,Heading, Image, Input } from '@chakra-ui/react'
import pic from '../../../public/login.svg'
const Signup = ({handleSignup,heading}) => {
// handle the user data
const [data, setData]=useState({
  username:"",
  mobileNumber:"",
  email:"",
  password:"",
  role:""
})
// handle the change and update the data
const handleChange=(e)=>{
   setData({...data, [e.target.name]: e.target.value})
}

  return (
   <>
    <Box  display="flex"  width="100%" height="100vh" justifyContent="center" alignItems="center">
       <Box className='signup-component' display="flex" width="80%" height="85%">
       <Box width="50%">
         <Image width="90%" height="100%" src={pic}></Image>
       </Box>
       <Box width="50%">
       <Box display="flex" flexDirection="column" gap="15px" width="90%" justifyContent="center" padding="20px 70px" >
               <label style={{margin:"5px 0px"}}> Name
                <Input onChange={handleChange} backgroundColor="white" type="text"  name= "username" value={data.username} placeholder='Enter your name'/>
                </label>
                <label style={{margin:"5px 0px"}} >Mobile Number
                <Input onChange={handleChange} backgroundColor="white" type="number" name="mobileNumber" value={data.mobileNumber} placeholder='Enter your number'/>
                </label>
                <label style={{margin:"5px 0px"}} >Email
                <Input onChange={handleChange} backgroundColor="white" type="email" name="email" value={data.email} placeholder='Enter your email' />
                </label>
                <label style={{margin:"5px 0px"}} >Password
                <Input onChange={handleChange}  backgroundColor="white" type="password" name="password" value={data.password} placeholder='Enter your password'/>
                </label>
                <label style={{margin:"5px 0px"}}>Role
                  <select onChange={handleChange} name="role" value={data.role} style={{ backgroundColor: "white", width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}>
                    <option value="">Select Role</option>
                    <option value="Host">Host</option>
                    <option value="User">User</option>
                  </select>
                </label>
                <Button onClick={()=>{
                  return handleSignup(data)
                }}  type="submit">Signup</Button>
            </Box> 
        </Box>
        </Box>
    </Box>
   </>
  )
}

export default Signup    
