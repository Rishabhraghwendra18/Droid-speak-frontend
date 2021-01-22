import {Modal,Button} from 'react-bootstrap';
import React from 'react'

export default function ScheduleModal({show,handleClose}) {
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
                                  <td>Start Date/Time:</td>
                                  <td><input type="datetime-local"/></td>
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
              <Button variant="success">Schedule</Button>
            </Modal.Footer>
          </Modal>
      )
}
