import React, { useState } from 'react';
import './App.css';


const maxLength = 280;
function App(){
  const [posts, setPosts] = useState([]);
  const [remaining, setRemaining] = useState(maxLength);

function updateCount(event){
  const value = event.target.value;
  setRemaining(maxLength - value.length);
}

function handleSubmit(event){
  event.preventDefault();

  const updatedPosts = posts.concat({
    username: event.target.username.value,
    message: event.target.message.value,
    created: new Date()
  });

  setPosts(updatedPosts);
  event.target.reset();
}

return (
  <form className="App" onSubmit={handleSubmit}>
    Username<br/>
    <select name="username">
      <option value="testuser1">Testuser_1</option>
      <option value="testuser2">Testuser_2</option>
      <option value="testuser3">Testuser_3</option>
      <option value="testuser4">Testuser_4</option>
      <option value="testuser5">Testuser_5</option>
    </select>
    <br/>
    <br/>
    <br/>
    Message<br/>
    <textarea name="message" onChange={updateCount}>
    </textarea>
    <div>Characters remaining {remaining}</div>
    <br/>
    <br/>
    <input type="submit"/>
  </form>
);
}

export default App;