import React from 'react'
import {BsFillCartCheckFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {Container , Navbar , Nav ,FormControl,Dropdown,Badge} from 'react-bootstrap'
const Header = () => {
  return (
    <div><Navbar bg="dark" variant="dark" style={{height:"80"}}>
        <Container>
        <Navbar.Brand><Link to="/">Shopping Cart</Link></Navbar.Brand>
        <Navbar.Text className='search'><FormControl type="text" placeholder="Search" className='m-auto' style={{width:"500"}} /></Navbar.Text>
        <Nav>
            <Dropdown alignright="true">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                <BsFillCartCheckFill color='white' fontSize="25px"/>
                    <Badge bg="success">{10}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{minWidth:"370"}}>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </Nav>
        
        </Container>
        </Navbar></div>
  )
}

export default Header