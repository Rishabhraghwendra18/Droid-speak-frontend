import React,{useState} from 'react'
import{db,auth}from '../utilites/firebase';
import { Modal, Button } from 'react-bootstrap';
export default function UpdateModal({show,handleClose,id,name, starttime, endtime, mdate, mplatform,timestamp}) {
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
      const Update=function(event){
            event.preventDefault();
            db.collection("users").doc(auth.currentUser.uid).collection("schedules").doc(id)
            .set({
                  "Date":date,
                  "End Time":etime,
                  "Meeting Name":meetingname,
                  "Platform":platform,
                  "Start Time":stime,
                  "timestamp":timestamp
            })
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
