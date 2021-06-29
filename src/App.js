import "./App.css";
import React, { useState } from "react";
import JsonData from "./MOCK_DATA.json";

function App() {
  const [users, setUsers] = useState(JsonData.slice(0, 50));

  return(
   <div className="App">
    {
      users.map((user, index) => <div className="user">
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <h3>{user.email}</h3>
      </div>)
    }
   </div>
  )
}

export default App;