import React, { useState } from 'react';

import { Switch } from '@material-ui/core';

import 'typeface-roboto';

import './App.css';

function App() {
  const [state, setState] = useState({
    toggle: true
  });

  const handleToggle = name => event => {
    setState({
      ...state,
      [name]: event.target.checked
    });
  }

  return (
    <div className="App">
      <span className="Text">
        {state.toggle? 'On' : 'Off'}
      </span>
      <Switch
        checked={state.toggle}
        onChange={handleToggle('toggle')}
        value="toggle"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
}

export default App;
