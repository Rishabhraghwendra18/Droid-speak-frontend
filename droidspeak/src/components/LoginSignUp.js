import React,{useState} from 'react'
import {Card} from 'react-bootstrap';
import '../styles/LoginSignUp.css';
import SignUpModal from './SignUpModal';
import {auth} from '../utilites/firebase';
function LoginSignUp() {
const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const SignIn=function(event){
      event.preventDefault();
      auth.signInWithEmailAndPassword(email,password)  
      .catch((err)=>alert(err.message))
  }
      return (
            <Card>
                  <Card.Body>
                        <Card.Title><i class="fa fa-user-o" aria-hidden="true"></i></Card.Title>
                        <h6 className="card-subtitile">Login</h6>
                        <Card.Text>
                              <label>
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    <input type="email" className="mt-2" placeholder="Enter your email id" onChange={(e)=>setEmail(e.target.value)}/>
                              </label>
                              <label>
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                    <input type="password" className="my-2" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
                              </label>
                              <button type="button" className="my_button mb-2"onClick={SignIn}>LOGIN</button>
                              <span>Don't have a account?<a href="#" onClick={()=>{handleShow()}}> Create an Account</a></span>
                              {show?<SignUpModal show={show} handleClose={handleClose}/>:null}
                        </Card.Text>
                  </Card.Body>
            </Card>
      );
}
export default LoginSignUp;
