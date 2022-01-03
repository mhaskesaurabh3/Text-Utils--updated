import './App.css';
import About from './Components/About';
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
      <div className="my cotainer my-3">
        <Router>
          <Fragment>
          <Navbar title='TextUtils' mode={Mode} toggleMode={toggleMode} aboutText="About us" />
          <Alert alert={alert} />
          <TextForm heading="Enter your text here" />
            <Routes>
              {/* <Route exact path="/#" element={<Alert alert={alert} />} /> */}
                  <Route exact path="/about" element={<About />} />
              {/* <About /> */}
              {/* <Route exact path="/#" element={<TextForm heading="Enter your text here" />} /> */}
              </Routes>
          </Fragment>
        </Router>
      </div>

    </>
  )
}
export default App;