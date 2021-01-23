import {Modal,Button} from 'react-bootstrap';
import React,{useState} from 'react';
import {db}from '../utilites/firebase';

export default function ScheduleModal({show,handleClose}) {
      const[stime,setSTime]=useState();
      const [etime,setETime]=useState();
      const[meetingname,setMeetingname]=useState();
      const[date,setDate]=useState();
      const [platform,setPlatform]=useState("zoom");
      const style={
            "border-radius": "5px",
            "padding": "3px",
            "background-color": "white"
      }
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
                                  <td><input type="text" className="my-2" onChange={e=>setMeetingname(e.target.value)}/></td>
                            </tr>
                            <tr>
                                  <td>Meeting Date:</td>
                                  <td><input type="date" className="my-2" onChange={e=>setDate(e.target.value)}/></td>
                            </tr>
                            <tr>
                                  <td>Start Time:</td>
                                  <td><input type="time" onChange={e=>setSTime(e.target.value)}/></td>
                            </tr>
                            <tr>
                                  <td>End Time:</td>
                                  <td><input type="time" className="my-2" onChange={e=>setETime(e.target.value)}/></td>
                            </tr>
                            <tr>
                                  <td>Choose Platform:</td>
                                  <td>
                                        <select name="platform" style={style} onChange={e=>setPlatform(e.target.value)}>
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
              <Button variant="success">Schedule</Button>
            </Modal.Footer>
          </Modal>
      )
}
