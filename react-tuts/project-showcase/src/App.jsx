import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { RevealLinks } from './components/RevealLinks'
import { Example } from './components/footer'

function App() {

  return (
    <>
      <div className="container mx-auto min-h-screen text-center">
        <RevealLinks />
        <footer>
          <Example />
        </footer>

      </div>
    </>
  )
}

export default App
