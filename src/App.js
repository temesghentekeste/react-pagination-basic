import './App.css';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import JsonData from './MOCK_DATA.json';

function App() {
  const [users, setUsers] = useState(JsonData.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => (
      <div className="user">
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <h3>{user.email}</h3>
      </div>
    ));

  return <div className="App">{displayUsers}</div>;
}

export default App;
