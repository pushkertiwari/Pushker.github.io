import {lazy,Suspense} from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './modules/layout'
const Home = lazy(() => import('./pages/home'));
const Contact = lazy(() => import('./pages/contact'));
const Skills = lazy(() => import('./pages/skills'));
const Experience = lazy(() => import('./pages/experience'));
const Projects = lazy(() => import('./pages/projects'));
const Loader = lazy(() => import('./components/loader'))


export default function App(): React.ReactElement {
  return (
    <Layout>
      <Suspense fallback={<Loader loading={true} />}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      </Suspense>
    </Layout>
  )
}