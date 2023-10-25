import {useEffect } from 'react'
import "./App.css"
import Footer from './routes/footer/footer.component'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import SearchBar from './components/search-bar/search-bar.component'
function App() {
  useEffect(() => {
    console.log("api key");
    console.log(import.meta.env.VITE_FIREBASE_API_KEY)
    console.log("api key");
    console.log(import.meta.env.VITE_FIREBASE_API_KEY)
    console.log("api key");
    console.log(import.meta.env.VITE_FIREBASE_API_KEY)
    console.log("api key");
    console.log(import.meta.env.VITE_FIREBASE_API_KEY)
    console.log("api key");
    console.log(import.meta.env.VITE_FIREBASE_API_KEY)


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
