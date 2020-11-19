import './App.css';

import React, {useState, useEffect} from 'react';
import client from './Client';
//import Service from './services/Service';

function App() {
  const [posts, setPosts] = useState();

  const getData = async () => {
    const data = await client.getPosts();
    console.log(data)
  }
  
  /*useEffect(() => {  
    const getData = async () => {
      const data = await client.getPosts();
      console.log(data)
      setPosts(data)
    }
    getData()
  }, [])*/

  const handlOnClick = ()=>{
    console.log("hola")
    const doc = {
      id: "4",
      category: "finanzas",
      description: "Cae la bolsa",
      text: "uuuuuuuuuuuuuuuuuuuuuuuuuuuuu",
      author: "Ana",
      timesRead: 60,
      Popular: true
    };

    client.insertPost(doc);
  }

  return (
    <div className="App">
      <button onClick={handlOnClick}>INSERTAR</button>
      <button onClick={async()=>{
        const data = client.getPosts();
        console.log(data)
      }}>DATA</button>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Author</th>
            <th>Times read</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
