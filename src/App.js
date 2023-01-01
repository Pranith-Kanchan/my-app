import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import Alert from './components/Alert';
import React,{useState} from 'react'
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

    const showAlert=(message,type)=>{
          setAlert({msg :message,
                      type : type})
          setTimeout(() => {
            setAlert(null)
          }, 2000);
                      
    }

    const toggle=()=>{
        if(mode ==='light'){
          setMode("dark")
          document.body.style.backgroundColor="black";
          showAlert(" LOVE YOU LAVESHA","success");
        }else{
          setMode("light")
          document.body.style.backgroundColor="white";
          showAlert("Light mode enabled","success");
        }
    }
  return (
  <>
  {/* <BrowserRouter> */}
  
    <Navbar title ="NavBar" mode={mode} toggle ={toggle}/>
    <Alert alert={alert}/>
    <div className="container my-4">
    {/* <Routes> */}
    {/* <Route path="about/" element={<About/>} /> */}
    {/* <Route path="text/" element={} /> */}
    <TextArea heading ="Enter the Text Bellow to Analize"showAlert={showAlert} mode={mode}/>
    {/* </Routes> */}
    </div>
    {/* </BrowserRouter> */}
</>
  );
}

export default App;
