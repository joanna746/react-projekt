import Container from './components/Container/Container'
import NavBar from './components/NavBar/NavBar';
import Favourite from './components/Favourite/Favourite';
import About from './components/About/About';
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import List from './components/List/List';
import ListForm from './components/ListForm/ListForm';


const App = () => {
  return (
    <main>
      <NavBar/>
      <Container>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favourite />} />
          <Route path="/list/:listId" element={<List/>} />
          <Route path="*" element={<NotFound/>}/>
          
        </Routes>
        
      </Container>
      
    </main>
    
  );
};

export default App;
