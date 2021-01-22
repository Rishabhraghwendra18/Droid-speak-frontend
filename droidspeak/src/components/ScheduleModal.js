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
                      <label>
                            <span>Meeting Name:</span>
                            <input type="text" className="my-2"/>
                      </label>
                      <label>
                            <span>Date/Time:</span>
                            <input type="datetime-local" className="mt-2"/>
                      </label>
                      <label>
                            <span>End Time:</span>
                            <input type="time" className="mt-2"/>
                      </label>
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
