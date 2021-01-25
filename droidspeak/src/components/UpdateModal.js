import React,{useState} from 'react'
import{db,auth}from '../utilites/firebase';
import { Modal, Button } from 'react-bootstrap';
export default function UpdateModal({show,handleClose,id,name, starttime, endtime, mdate, mplatform,timestamp,details}) {
      const style={
            "border-radius": "5px",
            "padding": "3px",
            "background-color": "white"
      }
      const[stime,setSTime]=useState(starttime);
      const [etime,setETime]=useState(endtime);
      const[meetingname,setMeetingname]=useState(name);
      const[date,setDate]=useState(mdate);
      const [platform,setPlatform]=useState(mplatform);
      function GoogleMeet() {
            return (
                  <>
                        <tr>
                              <td>Enter code:</td>
                              <td><input type="text" id="meetcode" defaultValue={details.id} className="my-2" /></td>
                        </tr>
                        <span className="text-center d-block w-100">Or</span>
                        <tr>
                              <td>Link :</td>
                              <td><input type="text" id="meetlink"className="my-2" defaultValue={details.link}/></td>
                        </tr>
                  </>
            )
      }
      function Zoom() {
            return (
                  <>
                        <tr>
                              <td>Enter id:</td>
                              <td><input type="text" id ="zoomid"className="my-2" defaultValue={details.id}/></td>
                        </tr>
                        <tr>
                              <td>Enter password:</td>
                              <td><input type="text" className="my-2" id="zoompassword" defaultValue={details.password} /></td>
                        </tr>
                        <span className="text-center d-block w-100">Or</span>
                        <tr>
                              <td>Link :</td>
                              <td><input type="text" id="zoomlink"className="my-2" defaultValue={details.link} /></td>
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
      const Update=function(event){
            event.preventDefault();
            const data={
                  "Date": date,
                  "End Time": etime,
                  "Meeting Name": meetingname,
                  "Start Time": stime,
                  "Platform": platform,
                  "details":{},
                  "timestamp": timestamp
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
            db.collection("users").doc(auth.currentUser.uid).collection("schedules").doc(id)
            .set(data)
            .then(()=>alert("Successfully updated"))
            .catch(e=>alert("Can't update : ",e.message))
      }
      return (
            <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <table>
                            <tr>
                                  <td>Meeting Name:</td>
                                  <td><input type="text" className="my-2" onChange={e=>setMeetingname(e.target.value)} defaultValue={name}/></td>
                            </tr>
                            <tr>
                                  <td>Meeting Date:</td>
                                  <td><input type="date" className="my-2" onChange={e=>setDate(e.target.value)} defaultValue={mdate}/></td>
                            </tr>
                            <tr>
                                  <td>Start Time:</td>
                                  <td><input type="time" onChange={e=>setSTime(e.target.value)} defaultValue={starttime}/></td>
                            </tr>
                            <tr>
                                  <td>End Time:</td>
                                  <td><input type="time" className="my-2" onChange={e=>setETime(e.target.value)} defaultValue={endtime}/></td>
                            </tr>
                            <tr>
                                  <td>Choose Platform:</td>
                                  <td>
                                        <select name="platform" style={style} onChange={e=>setPlatform(e.target.value)} defaultValue={mplatform}>
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
              <Button variant="success" onClick={Update}>Update</Button>
            </Modal.Footer>
          </Modal>
      )
}
