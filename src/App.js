import { useEffect, useState } from 'react'
import { FaRegCopyright } from 'react-icons/fa'
import config from './config.json'

function App() {
  const [apod, setApod] = useState(null)

  useEffect(() => {
    getApod()
  }, [])

  const getApod = async() => {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${config.apiKey}&count=1`)
    const data = await response.json()
    setApod(data[0])
  }

  if (!apod) {
    return <h1>no image to display</h1>
  } else {
    const { copyright, date, explanation, title, url } = apod
    return (
  
      <div className='App'>
        <div className="container mx-auto p-4 flex flex-col items-center">
          <h1 className="text-2xl py-2">{title}</h1>
          <p className="py-3 text-xs md:text-base">{explanation}</p>
          <button onClick={getApod} className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" type="button" style={{ transition: "all .15s ease" }}>
          New Photo
          </button>
          <h1 className="text-2xl">{date}</h1>
          <img src={url}/>
          {copyright ? `Credit: ${copyright}` : ''}
        </div>
      </div>
    );
  }

}

export default App;
