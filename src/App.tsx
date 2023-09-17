import { Routes, Route } from 'react-router-dom'
import Layout from './modules/layout'
import Home from './pages/home'

export default function App(): React.ReactElement {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Layout>
  )
}