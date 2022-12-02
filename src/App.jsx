
import { HashRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Home from "./Pages/Home"
import ProductDetail from "./Pages/ProductDetail"
import Purchases from "./Pages/Purchases"
import Login from "./Pages/Login"
import NavBar from './Components/NavBar'
import LoadingScreen from './Components/LoadingScreen'
import { useSelector } from 'react-redux'
import ProtectedRoutes from './Components/ProtectedRoutes'


function App() {

  const isLoading = useSelector(state => state.isLoading)


  return (
    <HashRouter>
      <NavBar/>
      {isLoading && <LoadingScreen/>}
      <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/product/:id" element={<ProductDetail/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route element={<ProtectedRoutes/>}>
       <Route path="/purchases" element={<Purchases/>}/>
       </Route>
  
      </Routes>
    </HashRouter>

  )
}

export default App
