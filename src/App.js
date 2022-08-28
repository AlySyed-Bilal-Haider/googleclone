
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import {Routes,Route} from 'react-router-dom';
import News from './Component/News/News';
function App() {
  return (<>
     <Navbar/>
     <Routes>
     <Route exact path="/"  element={<News/>}/>
      <Route exact path="/search" element={<News/>}/>
      <Route path="/news" element={<News/>}/>
       
     
      {/* <Route path="/videos">
        <Results />
      </Route> */}
      </Routes>
     <Footer/>
     </>
  );
}

export default App;