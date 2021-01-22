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
                        <Nav.Link href="#" onClick={handleShow}>Schedule A Metting</Nav.Link>
                  </Nav>
                  <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="danger" onClick={()=>auth.signOut()}>Log Out</Button>
                  </Form>
                  </Navbar>
                  <ScheduleModal show={show} handleClose={handleClose}/>
            </div>
      )
}
