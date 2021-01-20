import React from 'react'
import {Card} from 'react-bootstrap';
import '../styles/LoginSignUp.css';
function LoginSignUp() {
      return (
            <Card>
                  <Card.Body>
                        <Card.Title><i class="fa fa-user-o" aria-hidden="true"></i></Card.Title>
                        <Card.Subtitle>Login</Card.Subtitle>
                        <Card.Text>
                        <label>
                              <i class="fa fa-user-o" aria-hidden="true"></i>
                              <input type="email" placeholder="Enter your email id"/>
                              </label>
                        </Card.Text>
                  </Card.Body>
            </Card>
      );
}
export default LoginSignUp;
