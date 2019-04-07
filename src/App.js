import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [state, setData] = useState({data: [], hasDataLoaded: false})

  useEffect(() => {
    (async () => {
      const {data} = await axios.get('/api/getdata')
      setData({data, hasDataLoaded: true})
    })()
  }, [state])

  const renderData = () => {
    const{data} = state
    return data.map((person) => {
      const {id, name, age} = person
      return (
        <div key={id}>
          <h3>{name}</h3>
          <h3>{age}</h3>
        </div>
      )
    })
  }
  const {hasDataLoaded} = state
  if (!hasDataLoaded) {
    return (
      <div>Loading...</div>
    )
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {renderData()}
        </div>
      </header>
    </div>
  )

}

export default App
