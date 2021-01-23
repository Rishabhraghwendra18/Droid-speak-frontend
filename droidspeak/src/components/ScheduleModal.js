import {Modal,Button} from 'react-bootstrap';
import React,{useState} from 'react'

export default function ScheduleModal({show,handleClose}) {
      // const[time,setTime]=useState();
      let time=null;
      const Time=function(event){
            event.preventDefault();
            // console.log(time);
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
                                  <td><input type="text" className="my-2"/></td>
                            </tr>
                            <tr>
                                  <td>Meeting Date:</td>
                                  <td><input type="date" className="my-2" onChange={e=>console.log(e.target.value)}/></td>
                            </tr>
                            <tr>
                                  <td>Start Time:</td>
                                  <td><input type="time" onChange={e=>console.log(e.target.value)}/></td>
                            </tr>
                            <tr>
                                  <td>End Time:</td>
                                  <td><input type="time" className="my-2"/></td>
                            </tr>
                      </table>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" onClick={Time}>Schedule</Button>
            </Modal.Footer>
          </Modal>
      )
}
