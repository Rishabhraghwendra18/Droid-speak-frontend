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
            doc_fetched.collection("schedules").orderBy('timestamp','desc').onSnapshot((schedule) => {
                  setMeetinglists(schedule.docs);
                  // if(meetinglists) 
                  //       meetinglists.map(e=>console.log("if",e.id))

            })
      }
            , [])
      return (
            <div className="Dashboard">
                  <Navbar sticky="top"bg="light" variant="light">
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
                              meetinglists ? meetinglists.map((e) => <DashboardMeetings key={e.id} id={e.id} name={e.data()["Meeting Name"]} starttime={e.data()["Start Time"]} endtime={e.data()["End Time"]} date={e.data()["Date"]} platform={e.data().Platform} timestamp={e.data()["timestamp"]}/>
                              ) : null
                        }
                  </div>
            </div>
      )
}
