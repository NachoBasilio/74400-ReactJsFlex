import styled from 'styled-components'
import './App.css'
import Text from './components/Text'
import { Titulo } from './components/Titulo'



const Button = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  &:hover {
    ${(props) => {
      if (props.primary) {
        return `
          background-color: green;
        `
      }
      if (props.secondary) {
        return `
          background-color: yellow;
        `
      }
    }}
  }

  ${(props) => {
    if (props.primary) {
      return `
        background-color: blue;
      `
    }
    if (props.secondary) {
      return `
        background-color: red;
      `
    }
  }}
`
//Dejo esto como ayuda memoria: cualquier componente que exista, con el uso de syled(Nombre del Componente), se le puede agregar estilos. Siempre mientras acepte className como prop.
const TextPersonalizado = styled(Text)`
  color: red;
  font-size: 2rem;
`



function App() {
  return (
    <>
      <Titulo primary>Esto es un titulo</Titulo>
      <TextPersonalizado>Hola mundo</TextPersonalizado>
      <Button
        primary // Cambia a `primary` para probar el color azul de fondo
        onClick={() => {
          alert('Hola mundo')
        }}
      >
        Enviar
      </Button>

      <Button 
        secondary // Cambia a `secondary` para probar el color rojo de fondo
        onClick={() => {
          alert('Botón secundario presionado')
        }}
      >
        Cancelar
      </Button>
    </>
  )
}

export default App
