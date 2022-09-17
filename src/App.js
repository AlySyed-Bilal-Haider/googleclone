
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import {Routes,Route,Navigate} from 'react-router-dom';
import {Results} from './Component/Result';
import Signup from './Component/Firebase/Signup';
import Login from './Component/Firebase/Login';
function App() {
  return (<>
     <Navbar/>
     <Routes>
     <Route exact path="/"  element={<Navigate to="/search" replace />}/>
      <Route exact path="/search" element={<Results/>}/>
      <Route path="/images"  element={<Results/>}/>
      <Route path="/videos"  element={<Results/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      </Routes>
     <Footer/>
     </>
  );
}

export default App;