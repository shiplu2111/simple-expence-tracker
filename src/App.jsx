import { useState } from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import Expense from './pages/Expense'
import IncomePage from './pages/IncomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<Layout />} >
          <Route path="expense" element={<Expense />} />
          <Route path="income" element={<IncomePage />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
