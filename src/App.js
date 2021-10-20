import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert('Dark Mode has been enabled', 'success')
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      showAlert('Light Mode has been enabled', 'success')
      document.body.style.backgroundColor = 'white';

    }
  };


  return (
    <>
      <Router>
        <Switch>
          <div className="container-fluid mx-0 px-0">
            <Navbar mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert} />
            <Route exact path='/'>
              <TextForm heading='Enter your text...' mode={mode} showAlert={showAlert} />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
          </div>
        </Switch>
      </Router>
    </>
  );
}

export default App;
