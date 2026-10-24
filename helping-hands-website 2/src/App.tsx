import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Programs from './pages/Programs'
import ProgramDetail from './pages/ProgramDetail'
import Impact from './pages/Impact'
import Stories from './pages/Stories'
import StoryDetail from './pages/StoryDetail'
import GetInvolved from './pages/GetInvolved'
import Donate from './pages/Donate'
import Contact from './pages/Contact'
import Transparency from './pages/Transparency'
import Policy from './pages/Policy'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="missions" element={<Programs />} />
        <Route path="missions/:slug" element={<ProgramDetail />} />
        <Route path="impact" element={<Impact />} />
        <Route path="stories" element={<Stories />} />
        <Route path="stories/:slug" element={<StoryDetail />} />
        <Route path="get-involved" element={<GetInvolved />} />
        <Route path="donate" element={<Donate />} />
        <Route path="contact" element={<Contact />} />
        <Route path="transparency" element={<Transparency />} />
        <Route path="policies/:slug" element={<Policy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
