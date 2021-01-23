import React , {useState,useEffect}from 'react'
import {Modal,Button} from 'react-bootstrap';
import '../styles/SignUpModal.css';
import {auth} from '../utilites/firebase';
export default function SignUpModal({show,handleClose}) {
  const [email,setEmail]=useState('');
 const [passowrd,setPassword]=useState('');
  const SignUp=function(event){
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email,passowrd)
    .then((e)=>{alert("Account Created Successfully.Please login from main page");
    console.log(e.user.uid)})
    .catch((err)=>alert(err.message))
  }
      return (
            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                  <label>
                        <span>Your Full Name:</span>
                        <input type="email" className="mt-2"/>
                  </label>
                  <label>
                        <span>Your Email Id:</span>
                        <input type="email" className="my-2" onChange={e=>setEmail(e.target.value)}/>
                  </label>
                  <label>
                        <span>Choose a Password:</span>
                        <input type="password" className="mt-2" onChange={e=>setPassword(e.target.value)}/>
                  </label>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={SignUp}>Sign Up</Button>
        </Modal.Footer>
      </Modal>
      )
}
