import { useState } from 'react'
import "./App.css"
import Footer from './routes/footer/footer.component'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import SearchBar from './components/search-bar/search-bar.component'
function App() {
  const handleSearch = (query) => {
    console.log(query)
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
