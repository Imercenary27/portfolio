
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar1 from './Pages/Navbar1';
import Dashboard from './Pages/Dashboard1';
const App = () => {
  return (
    <div className="App">
      <Navbar1/> 
      <Dashboard />
    </div>
  );
};// return  <BrowserRouter>
    
  //   <Routes>
  //     <Route path="/" element={<Dashboard/>}/>

  //   </Routes>
  //   </BrowserRouter>


export default App;
