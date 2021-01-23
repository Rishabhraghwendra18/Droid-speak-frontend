import React from 'react'
import {Card,Button}from 'react-bootstrap';
export default function DashboardMeetings({name,starttime,endtime,date}) {
      const CardStyle={
            width:"36rem",
            "margin-bottom":"23px"
      };
      return (
            <Card border="info" className="" style={CardStyle}>
                  <Card.Header style={{ width: '100%' }}>"Meeting Name Here"</Card.Header>
                  <Card.Body>
                        <Card.Text>
                              <table>
                                    <tr>
                                          <label>
                                                <span>Date : </span>
                                                <span>"Meeting date here "</span>
                                          </label>
                                    </tr>
                                    <tr>
                                          <label>
                                                <span>Start Time : </span>
                                                <span>"Meeting time here "</span>
                                          </label>
                                    </tr>
                                    <tr>
                                          <label>
                                                <span>End Time : </span>
                                                <span>"Meeting end time here "</span>
                                          </label>
                                    </tr>
                              </table>
                        </Card.Text>
                        <Button variant="danger">Delete Schedule</Button>
                  </Card.Body>
             </Card>
      )
}
