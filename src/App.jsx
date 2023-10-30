import {useEffect } from 'react'
import "./App.css"
import Footer from './routes/footer/footer.component'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import SearchBar from './components/search-bar/search-bar.component'
function App() {
  useEffect(() => {
 
}, [])
  const handleSearch = (query) => {

  }

  return (
    <div className='container'>
      <Navigation handleSearch={handleSearch}/>
      <Home/>
      <Footer/>

    </div>
  )
}

export default App
