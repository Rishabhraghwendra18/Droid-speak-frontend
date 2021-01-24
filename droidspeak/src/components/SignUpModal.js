import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap';
import '../styles/SignUpModal.css';
import { auth, db } from '../utilites/firebase';
export default function SignUpModal({ show, handleClose }) {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState('');
  const [passowrd, setPassword] = useState('');
  const SettingUpUserdb = function (userid) {
    db.collection("users").doc(userid).set({
      "Name": username
    });
  }
  const SignUp = function (event) {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, passowrd)
      .then((e) => {
        SettingUpUserdb(e.user.uid);
        alert("Account Created Successfully.Please login from main page");

      })
      .catch((err) => alert(err.message))
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
          <input type="email" className="mt-2" onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          <span>Your Email Id:</span>
          <input type="email" className="my-2" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Choose a Password:</span>
          <input type="password" className="mt-2" onChange={e => setPassword(e.target.value)} />
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
