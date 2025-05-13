import { useState } from "react"
import SearchBar from "./components/SearchBar"
import ImageList from "./components/ImageList"
import searchImages from "./api"



function App() {
  //searchImages('cars')
  const [images, setImages] = useState([])
const handlesubmit = async(term) =>{
console.log('usted esta buscando con: ', term)
const result = await searchImages(term)
setImages(result)
}
  return (
    <>
      <h1>Pictures App</h1>
  <SearchBar onSubmit={handlesubmit}/>
  <ImageList images ={images}/>
  </>
  )
}

export default App
