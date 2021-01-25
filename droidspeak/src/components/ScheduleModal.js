import { Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { auth, db } from '../utilites/firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default function ScheduleModal({ show, handleClose }) {
      const [stime, setSTime] = useState();
      const [etime, setETime] = useState();
      const [meetingname, setMeetingname] = useState();
      const [date, setDate] = useState();
      const [platform, setPlatform] = useState("zoom");
      const style = {
            "border-radius": "5px",
            "padding": "3px",
            "background-color": "white"
      }
      const [smeet, setMeet] = useState({});
      const[szoom,setZoom]=useState({});
      function GoogleMeet() {
            return (
                  <>
                        <tr>
                              <td>Enter code:</td>
                              <td><input type="text" id="meetcode" className="my-2" /></td>
                        </tr>
                        <span className="text-center d-block w-100">Or</span>
                        <tr>
                              <td>Link :</td>
                              <td><input type="text" id="meetlink"className="my-2"/></td>
                        </tr>
                  </>
            )
      }
      function Zoom() {
            return (
                  <>
                        <tr>
                              <td>Enter id:</td>
                              <td><input type="text" id ="zoomid"className="my-2" /></td>
                        </tr>
                        <tr>
                              <td>Enter password:</td>
                              <td><input type="text" className="my-2" id="zoompassword" /></td>
                        </tr>
                        <span className="text-center d-block w-100">Or</span>
                        <tr>
                              <td>Link :</td>
                              <td><input type="text" id="zoomlink"className="my-2" onChange={e => setMeet({link :e.target.value})} /></td>
                        </tr>
                  </>
            )
      }
      let choice;
      if(platform=="zoom"){
            choice=<Zoom/>
      }
      else{
            choice=<GoogleMeet/>
      }
      const schedule = function (event) {
            event.preventDefault();
            let userid = null, doc_fetched = null;
            userid = auth.currentUser.uid;
            doc_fetched = db.collection("users").doc(userid);
            const data={
                  "Date": date,
                  "End Time": etime,
                  "Meeting Name": meetingname,
                  "Start Time": stime,
                  "Platform": platform,
                  "details":{},
                  "timestamp": firebase.firestore.FieldValue.serverTimestamp()
            }
            if(platform=="zoom"){
                  const zoompassword=document.getElementById("zoompassword").value;
                  const zoomid=document.getElementById("zoomid").value;
                  const zoomlink=document.getElementById("zoomlink").value;
                  if(zoomid){
                        data.details.id=zoomid;
                        data.details.password=zoompassword
                  }
                  else{
                        data.details.link=zoomlink;
                  }
            }
            else{
                  const meetcode=document.getElementById("meetcode").value;
                  const meetlink=document.getElementById("meetlink").value;
                  if(meetcode){
                        data.details.id=meetcode;
                  }
                  else{
                        data.details.link=meetlink;
                  }
            }
            if (doc_fetched) {
                  doc_fetched.collection("schedules").add(data)
                        .then((e) => alert("Meeting Scheduled"))
                        .catch((e) => alert(e.message))
            }
            console.log(data);
      };
      return (
            <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
            >
                  <Modal.Header closeButton>
                        <Modal.Title>Schedule Meeting</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                        <table>
                              <tr>
                                    <td>Meeting Name:</td>
                                    <td><input type="text" className="my-2" onChange={e => setMeetingname(e.target.value)} /></td>
                              </tr>
                              <tr>
                                    <td>Meeting Date:</td>
                                    <td><input type="date" className="my-2" onChange={e => setDate(e.target.value)} /></td>
                              </tr>
                              <tr>
                                    <td>Start Time:</td>
                                    <td><input type="time" onChange={e => setSTime(e.target.value)} /></td>
                              </tr>
                              <tr>
                                    <td>End Time:</td>
                                    <td><input type="time" className="my-2" onChange={e => setETime(e.target.value)} /></td>
                              </tr>
                              <tr>
                                    <td>Choose Platform:</td>
                                    <td>
                                          <select name="platform" style={style} onChange={e => setPlatform(e.target.value)}>
                                                <option value="Zoom">zoom</option>
                                                <option value="Google Meet">Google Meet</option>
                                          </select>
                                    </td>
                              </tr>
                              {choice}
                        </table>
                  </Modal.Body>
                  <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                              Close
              </Button>
                        <Button variant="success" onClick={schedule}>Schedule</Button>
                  </Modal.Footer>
            </Modal>
      )
}
