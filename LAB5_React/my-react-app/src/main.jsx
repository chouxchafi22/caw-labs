import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Exo1 from './EXO1.jsx'
import Exo2 from './exo2.jsx'
import Exo3 from './exo3.jsx'
import Exo4 from './exo4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Exo1 />
    <Exo2 />
    <Exo3/>
    <Exo4 />
  </StrictMode>,
)
