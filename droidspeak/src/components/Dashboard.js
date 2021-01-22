import React,{useState} from 'react';
import {Navbar,Nav,Form,Button,FormControl}from 'react-bootstrap';
import '../styles/Dashboard.css';
import {auth}from '../utilites/firebase';
import ScheduleModal from './ScheduleModal';
export default function Dashboard() {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
      return (
            <div className="Dashboard">
                  <Navbar bg="light" variant="light">
                  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                  <Nav className="mr-auto">
                        <Nav.Link href="#" onClick={handleShow}>Schedule a Metting</Nav.Link>
                  </Nav>
                  <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="danger" onClick={()=>auth.signOut()}>Log Out</Button>
                  </Form>
                  </Navbar>
                  <ScheduleModal show={show} handleClose={handleClose}/>
                  <Button variant="primary" onClick={handleShow} style={{margin:"18px"}}>
                        <i class="fa fa-plus" aria-hidden="true" style={{marginRight:"5px"}}></i>
                         Schedule a Meeting 
                  </Button>
            </div>
      )
}
