import React,{useState,useEffect} from 'react';
import {Navbar,Nav,Form,Button,FormControl}from 'react-bootstrap';
import '../styles/Dashboard.css';
import {auth,db}from '../utilites/firebase';
import ScheduleModal from './ScheduleModal';
import DashboardMeetings from './DashboardMeetings';
export default function Dashboard() {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [doclist,setDoclist]=useState(null);
let userid=null,doc_fetched=null;
useEffect(() => {
      userid=auth.currentUser.uid;
      doc_fetched=db.collection("users").doc(userid);
      setDoclist(db.collection("users").doc(userid));
      if(doc_fetched){
            doc_fetched.get().then((doc)=>{    
                  if(doc.exists){   
                        console.log("Doc is",doc.data());
                        setDoclist(doc.data());
                  }
            }).catch((err)=>alert(err.message))
      }
      }, [])
      return (
            <div className="Dashboard">
                  <Navbar bg="light" variant="light">
                  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                  <Nav className="mr-auto">
                        <Nav.Link href="#" onClick={handleShow}>Schedule a Metting</Nav.Link>
                  </Nav>
                  <Form inline>
                        <span>Welcome : {doclist.name}</span>
                        {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                        <Button variant="danger" onClick={()=>auth.signOut()}>Log Out</Button>
                  </Form>
                  </Navbar>
                  <ScheduleModal show={show} handleClose={handleClose}/>
                  <Button variant="primary" onClick={handleShow} style={{margin:"18px"}}>
                        <i class="fa fa-plus" aria-hidden="true" style={{marginRight:"5px"}}></i>
                         Schedule a Meeting 
                  </Button>
                  <hr/>
                  <div className="meetings_list">
                        <DashboardMeetings/>
                        <DashboardMeetings/>
                        {   //Whenever I comment this block error will be gone and everything started working normal    
                              
                        }
                  </div>
            </div>
      )
}
