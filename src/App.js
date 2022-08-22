import { useState } from "react";


function App() {


  const [job, setJob] = useState('')
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('job'))
    return storageJobs ?? ['xin viec fb']
  })
  const handleAddJob = () => {

    setJobs(prev => {
      const newJobs = [...prev, job]
      localStorage.setItem('job', JSON.stringify(newJobs))
      return newJobs
    })
    setJob('')
  }
  return (
    <div className="App">
      <h1>helo i'm wjbu jack and oggy</h1>
      <img src="https://c.tenor.com/dJEIQACw138AAAAC/loli-ogusers.gif" alt="anh loli" />
      <br />
      <input style={{ width: 500, backgroundColor: "coral", color: '#333' }}
        placeholder={'Nhap 1 job'}
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button onClick={handleAddJob}>ADD</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>

  );
}

export default App;
