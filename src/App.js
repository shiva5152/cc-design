import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Home,About,Contact,Services,SharedLayout} from './pages'


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
             <Route index element={<Home />}/>
             <Route path="about" element={<About/>} />
             <Route path="contact" element={<Contact />} />
             <Route path="services" element={<Services/>} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  )
}
export default App