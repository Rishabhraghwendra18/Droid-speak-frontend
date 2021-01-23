import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';
import '../styles/Dashboard.css';
import { auth, db } from '../utilites/firebase';
import ScheduleModal from './ScheduleModal';
import DashboardMeetings from './DashboardMeetings';
export default function Dashboard() {
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
      const [doclist, setDoclist] = useState(null);
      const [username, setUsername] = useState();
      const [meetinglists, setMeetinglists] = useState();
      let userid = null, doc_fetched = null, name;
      useEffect(() => {
            userid = auth.currentUser.uid;
            doc_fetched = db.collection("users").doc(userid);
            if (doc_fetched) {
                  doc_fetched.get().then((doc) => {
                        if (doc.exists) {
                              console.log("Doc is", doc.data());
                              setDoclist(doc.data());
                        }
                  }).catch((err) => alert(err.message))
            }
            doc_fetched.collection("schedules").get().then((schedule)=>{
                  setMeetinglists(schedule.docs);
                  if(meetinglists) meetinglists.map(e=>console.log(e.data()))
            })
            .catch((e)=>console.log("Error in subcollection" , e.message))
      }, [])
      return (
            <div className="Dashboard">
                  <Navbar bg="light" variant="light">
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="mr-auto">
                              <Nav.Link href="#" onClick={handleShow}>Schedule a Metting</Nav.Link>
                        </Nav>
                        <Form inline>
                              {name ? <span>Welcome : {name}</span> : <span>User</span>}
                              {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                              <Button variant="danger" onClick={() => auth.signOut()}>Log Out</Button>
                        </Form>
                  </Navbar>
                  <ScheduleModal show={show} handleClose={handleClose} />
                  <Button variant="primary" onClick={handleShow} style={{ margin: "18px" }}>
                        <i class="fa fa-plus" aria-hidden="true" style={{ marginRight: "5px" }}></i>
                         Schedule a Meeting
                  </Button>
                  <hr />
                  <div className="meetings_list">
                        {
                              meetinglists?meetinglists.map((e)=><DashboardMeetings name={e.data()["Meeting Name"]} starttime={e.data()["Start Time"].seconds.toString()} endtime={e.data()["End Time"].seconds.toString()} date={e.data()["Start Time"].seconds.toString()} platform={e.data().Platform}/>
                              ):null
                        }
                  </div>
            </div>
      )
}
