import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './template/home';
import Students from './pages/students';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
   


  return (
    <div className="App">

        <BrowserRouter >
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/students" element={<Students/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
