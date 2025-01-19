import { Box, Button, Heading, ListItem, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import { NavLink,  useNavigate } from 'react-router-dom'
import './Header.css'
import { useSelector } from 'react-redux'


const Header = () => {
  // getting user info from redux store
  const user= useSelector((state)=>state.user);
  const navigate= useNavigate();
  return (
    <Box display="flex" justifyContent="space-between" padding="30px">
        <Box padding="40px">
            <Heading>Events</Heading>
        </Box>
        <Box padding="40px" display="flex" gap="20px">
            <UnorderedList display="flex" gap="20px" listStyleType="none" fontSize="20px">
                <ListItem padding="0px 10px">
                <NavLink className={({isActive})=>{return `menu-item ${isActive?"active":""}`}}  to="/">Home</NavLink>
                </ListItem>
                <ListItem padding="0px 10px">
                <NavLink className={({isActive})=>{return `menu-item ${isActive?"active":""}`}}  to="/contact">Contact</NavLink>
                </ListItem>
                <ListItem padding="0px 10px">
                <NavLink className={({isActive})=>{return `menu-item ${isActive?"active":""}`}}  to="/Blogs">Blogs</NavLink>
                </ListItem>
               {/* dashboard is only visible when user is logged in */}
                {user.username != ""?<ListItem padding="0px 10px">
                <NavLink className={({isActive})=>{return `menu-item ${isActive?"active":""}`}}   to="/dashboard">Dashboard</NavLink>
                </ListItem>:""}

            </UnorderedList>
            <Box display="flex" gap="20px">
              <Button onClick={()=> navigate("/user/login")} variant="outline">Login</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default Header