import Hero from './components/Hero/Hero'
import SearchForm from './components/SearchForm/SearchForm'
import List from './components/List/List'
import Container from './components/Container/Container'
import ColumnForm from './components/ColumnForm/ColumnForm';
const App = () => {
  return (
    <Container>
      <Hero />
      <SearchForm />
      <List/>
      </Container>
  );
};

export default App;
