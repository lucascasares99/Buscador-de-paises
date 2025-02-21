import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Busqueda } from './Components/Busqueda'

import { MostrarResultado } from './Components/MostrarResultado'

function App() {

  const [resultado, setresultado] = useState([]);
  const [error, seterror] = useState(false)

  return (
    <>
      <Busqueda seterror={seterror} setresultado={setresultado} />
      <MostrarResultado resultado={resultado} error={error} />
    </>
  )
}

export default App
