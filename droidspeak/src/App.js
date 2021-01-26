import LoginSignUp from './components/LoginSignUp';
import './styles/App.css';
import {useState,useEffect}from 'react';
import {auth}from './utilites/firebase';
import Dashboard from './components/Dashboard';
import ClockLoader from "react-spinners/ClockLoader";
function App() {
  const[loader,setLoader]=useState(false);
  const[user,setUser]=useState(false);
  useEffect(() => {
  auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      setUser(true);
      setLoader(false);
    }
    else{
      setUser(false);
    }
  })
  setLoader(true);

  }, [])
  return (
    <div className="App">
      {loader?(<ClockLoader color={'#000000'} loading={loader} size={150} />):
      user?<Dashboard/>:<LoginSignUp/>
      }
    </div>
  );
}

export default App;
