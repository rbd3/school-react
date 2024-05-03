import { useState, useEffect } from 'react'

import './App.css'

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/api/students') // Replace with your Rails API endpoint
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <>
      <h2>Students</h2>
      <ul>
        {data.Students?.map((student) => (
          <li key={student.id}>
            {student.first_name} {student.last_name} ({student.email})
          </li>
        ))}
      </ul>
    </>
  );
}

export default App
