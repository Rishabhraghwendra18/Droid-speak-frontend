import React from 'react'
import {Navbar,Nav,Form,Button,FormControl}from 'react-bootstrap';
import '../styles/Dashboard.css';
import {auth}from '../utilites/firebase';
export default function Dashboard() {
      return (
            <div className="Dashboard">
                  <Navbar bg="light" variant="light">
                  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                  <Nav className="mr-auto">
                        <Nav.Link href="#">Schedule A Metting</Nav.Link>
                  </Nav>
                  <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="danger" onClick={()=>auth.signOut()}>Log Out</Button>
                  </Form>
                  </Navbar>
            </div>
      )
}
