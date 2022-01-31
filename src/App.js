import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { Fragment, useState } from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success");
    }
  }
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  return (
    <> 
    <Navbar title='TextUtils' mode={Mode} toggleMode={toggleMode} aboutText="About us" />
      <div className="my container my-3">
        <Router>
          <Fragment>
         
          <Alert alert={alert} />
          <TextForm heading="Enter your text here" />
            <Routes>
              {/* <Route exact path="/#" element={<Alert alert={alert} />} /> */}
                  {/* <Route exact path="/about" element={<About />} /> */}

              </Routes>
          </Fragment>
        </Router>
      </div>

    </>
  )
}
export default App;