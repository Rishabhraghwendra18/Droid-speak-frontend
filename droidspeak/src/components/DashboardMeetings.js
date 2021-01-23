import React from 'react'
import { Card, Button } from 'react-bootstrap';
import{db,auth}from '../utilites/firebase';
export default function DashboardMeetings({ id,name, starttime, endtime, date, platform }) {
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
                        <Button variant="danger" onClick={DeleteSchedule}>Delete Schedule</Button>
                  </Card.Body>
            </Card>
      )
}
