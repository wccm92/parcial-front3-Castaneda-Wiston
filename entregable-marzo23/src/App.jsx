import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [name, setName] = useState('')
  const [marca, setMarca] = useState('')
  const [error, setError] = useState('')
  const [marcaFav, setMarcaFav] = useState({})
  const [submitted, setSubmitted] = useState(false)


  const handleSubmit = (e) =>{

    e.preventDefault()

    if (!name || !marca) {
      setError('Porfavor rellena todos los campos')
      return
    }

    if (name.length < 3){
      setError(`La longitud minima del campo name es de 3`)
      return
    }

    if (marca.length < 6){
      setError(`La longitud minima del campo plato es de 6`)
      return
    }

    name.trimStart();

    const marcaFavorita = {
      name: name,
      marca: marca
    }

    setPlatoFav(marcaFavorita)
    setSubmitted(true)
  }

  return (
    <div>
      <h1>Elige tu marca favorita</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Nombre</label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='imgUrl'>Marca de carro favorita</label>
          <input
            type='text'
            name='plato'
            value={plato}
            onChange={(e) => setMarca(e.target.value)}
          />
        </div>
        <button type='submit'>Adicionar Marca</button>
      </form>
      {error && <p>{error}</p>}

      {submitted && <Card props={marcaFav} />}

    </div>
  )
}

export default App