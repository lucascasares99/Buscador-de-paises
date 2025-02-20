import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Busqueda } from './Components/Busqueda'

import { MostrarResultado } from './Components/MostrarResultado'

function App() {
  const [resultado, setresultado] = useState ([]);


  return (
    <>
      <Busqueda setresultado={setresultado}/>
      <MostrarResultado resultado={resultado}/>
    </>
  )
}

export default App
