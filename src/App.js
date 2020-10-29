import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

import UserForm from './components/form/form.js'
import Results from './components/form_data/form_data.js'

function App() {
  const [user, setUser] = useState({
  })
  console.log(user)

  return (
    <div className="App">
        <h1>Hook Form</h1>
        <UserForm user={user} setUser={setUser}/>
        <Results user={user}/>
    </div>
  );
}

export default App;
