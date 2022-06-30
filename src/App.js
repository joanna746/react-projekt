import Container from './components/Container/Container'
import NavBar from './components/NavBar/NavBar';
import Favourite from './components/Favourite/Favourite';
import About from './components/About/About';
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';



const App = () => {
  return (
    <main>
      <NavBar/>
      <Container>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favourite />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Container>
    </main>
  );
};

export default App;
