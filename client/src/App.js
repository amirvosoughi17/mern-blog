import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import PageNotFound from './pages/PageNotFound';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/*' element={<PageNotFound />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
