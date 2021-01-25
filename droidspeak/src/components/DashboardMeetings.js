import React,{useState} from 'react'
import { Card, Button } from 'react-bootstrap';
import{db,auth}from '../utilites/firebase';
import UpdateModal from './UpdateModal';
export default function DashboardMeetings({ id,name, starttime, endtime, date, platform,timestamp,details }) {
const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

      const CardStyle = {
            width: "36rem",
            "margin-bottom": "23px"
      };
      const DeleteSchedule=function(event){
            event.preventDefault();
            db.collection("users").doc(auth.currentUser.uid).collection("schedules").doc(id)
            .delete().then(()=>alert("Successfully deleted"))
            .catch(e=>alert("Can't delete : ",e.message))
      }
      return (
            <Card border="info" className="" style={CardStyle}>
                  <Card.Header style={{ width: '100%' }}>{name}</Card.Header>
                  <Card.Body>
                        <Card.Text>
                              <table>
                                    <tr>
                                          <label>
                                                <span>Date : </span>
                                                <span>{date}</span>
                                          </label>
                                    </tr>
                                    <tr>
                                          <label>
                                                <span>Platform : </span>
                                                <span>{platform}</span>
                                          </label>
                                    </tr>
                                    <tr>
                                          <label>
                                                <span>Start Time : </span>
                                                <span>{starttime}</span>
                                          </label>
                                    </tr>
                                    <tr>
                                          <label>
                                                <span>End Time : </span>
                                                <span>{endtime}</span>
                                          </label>
                                    </tr>
                              </table>
                        </Card.Text>
                        <div className="d-flex flex-row">
                              <Button variant="danger" className="mx-2" onClick={DeleteSchedule}>Delete Schedule</Button>
                              <Button variant="primary" className="mx-2" onClick={handleShow}>Update Schedule</Button>
                              <UpdateModal show={show} handleClose={handleClose} id={id} name={name} mplatform={platform}
                              starttime={starttime}
                              endtime={endtime}
                              mdate={date}
                              timestamp={timestamp}
                              details={details}
                              />
                        </div>
                  </Card.Body>
            </Card>
      )
}
