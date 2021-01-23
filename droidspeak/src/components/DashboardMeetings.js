import React from 'react'
import { Card, Button } from 'react-bootstrap';
export default function DashboardMeetings({ name, starttime, endtime, date, platform }) {
      const CardStyle = {
            width: "36rem",
            "margin-bottom": "23px"
      };
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
                        <Button variant="danger">Delete Schedule</Button>
                  </Card.Body>
            </Card>
      )
}
