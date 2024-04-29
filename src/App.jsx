import FotoAmpliada from './components/FotoAmpliada'
import FotoList from './components/FotoList'
import SearchBar from './components/SearchBar'
import axios from 'axios';

import { useState, useEffect} from 'react'

function App() {
  const [query, setQuery] = useState('');
  const [categoria, setCategoria] = useState('');
  const [fotos, setFotos] = useState([]);
  const [FotoAmpliada, setFotoAmpliada] = useState (null);

const fetchData = async ({query, categoria}) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params:{
        client_id: apiKey,
        count: 12,
      }
    })
    setFotos(response.data);
    console.log(response.data);
};

useEffect(() => {
  fetchData(query,categoria)
},[])

  return (
    <div className='container'>
      <SearchBar/>
      <FotoList fotos = {fotos} setFotoAmpliada={setFotoAmpliada}/>
      <FotoAmpliada foto={FotoAmpliada} setFotoAmpliada={setFotoAmpliada}/>
    </div>
  )
}

export default App
