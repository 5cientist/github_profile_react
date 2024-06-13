import { useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [userName, setUsername] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = () => {
    axios.get("https://api.github.com/users/" + userName)
      .then(function (res) {
        console.log(res)
        setUserData(res.data);

      }).catch(function (error) {
        console.log(error);
        alert("Something went error")
      })


  }

  return (
    <div className="app">
      <div className="search">
        <input type="text"
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Enter github user name ' />
        <button onClick={handleSearch}>Fetch Profile</button>
      </div>
      {userData && (<div className="profile">
        <img src={userData.avatar_url} alt="" />
        <h1>{userData.name}</h1>
        <p>{userData.bio}</p>
        <ul>
          <li>Followers :{userData.followers} </li>
          <li>Following : {userData.following}</li>
          <li>Public repo : {userData.public_repos}</li>


        </ul>
        <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
      </div>)}


    </div>
  )
}

export default App
