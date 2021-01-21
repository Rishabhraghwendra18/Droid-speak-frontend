import React from 'react'
import {Card} from 'react-bootstrap';
import '../styles/LoginSignUp.css';
function LoginSignUp() {
      return (
            <Card>
                  <Card.Body>
                        <Card.Title><i class="fa fa-user-o" aria-hidden="true"></i></Card.Title>
                        <h6 className="card-subtitile">Login</h6>
                        <Card.Text>
                              <label>
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    <input type="email" className="mt-2" placeholder="Enter your email id"/>
                              </label>
                              <label>
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                    <input type="password" className="my-2" placeholder="Enter your password"/>
                              </label>
                              <button type="button" className="my_button mb-2">LOGIN</button>
                              <span>Don't have a account? <a href="#"> Create an Account</a></span>
                              <div className="circle"></div>
                        </Card.Text>
                  </Card.Body>
            </Card>
      );
}
export default LoginSignUp;
