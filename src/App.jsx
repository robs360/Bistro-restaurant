
import { Outlet } from 'react-router-dom'
import Nav from './NavFoter/Nav'
import Footer from './NavFoter/Footer'

function App() {
  

  return (
    <>
        <div>
        
             <Nav></Nav>
             <Outlet></Outlet>
             <Footer></Footer>
        </div>
    </>
  )
}

export default App
