import LoginSignUp from './components/LoginSignUp';
import './styles/App.css';
import {useState,useEffect}from 'react';
import {auth}from './utilites/firebase';
import Dashboard from './components/Dashboard';
function App() {
  const[user,setUser]=useState(false);
  useEffect(() => {
  auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      setUser(true);
    }
    else{
      setUser(false);
      console.log("logged out")
    }
  })
  }, [])
  return (
    <div className="App">
      {user?<Dashboard/>:<LoginSignUp/>}
    </div>
  );
}

export default App;
