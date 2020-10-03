import React, { useState } from 'react';
import './Home.css';
import { useStateValue } from '../StateProvider';

const Home = () => {

  const [{ user },dispatch] = useStateValue();

  const [name, setName] = useState('');
  const [id, setID] = useState('');

  const req = {
    "photoUrls": [
      "photoUrls",
      "photoUrls"
    ],
    "name": name,
    "id": parseInt(id),
    "category": {
      "name": "name",
      "id": 6
    },
    "tags": [
      {
        "name": "name",
        "id": 1
      },
      {
        "name": "name",
        "id": 1
      }
    ],
    "status": "available"
  }


  const baseUrl = 'http://localhost:8080/api/pet';

  const postPet = async (e) => {
    e.preventDefault();
    if(user){
      try {
        let result = await fetch(baseUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(req)
        })
        if(result.status === 200)
          alert("Post request was Successfull -- Status: " + result.status +":" + result.statusText);
        else{
          let getResult = await fetch(baseUrl+'/'+parseInt(id))
          if(result.status === 200)
            alert("POST request was not sucessfull but GET request was successfull");
          else
            alert(getResult.status+":"+getResult.statusText);
        }
        console.log(result);
      } catch (e) {
        alert(e);
      }
    }
    else
      alert("Please LogIn to Post a request");
  }

  return (
    <div className="home">
      <div className="homeContainer">
        <h2>Pet Store</h2>

        <form>
          <h5>Pet Name</h5>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />

          <h5>ID</h5>
          <input type="text" value={id} onChange={e => setID(e.target.value)} />

          <button type='submit' onClick={postPet} className="homePost">Post Pet</button>
        </form>
      </div>
    </div>
  );
}

export default Home;