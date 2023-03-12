import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Box, Button, SvgIcon } from '@mui/material'
import {ReactComponent as Logo} from "./assets/logo.svg"
import { Header } from './templates/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Header/>
  )
}

export default App