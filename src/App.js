import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import logo from './logo.svg';
import {Container} from 'react-bootstrap'

function App() {
  return (
    <div>
      <Header/>
        <main>
          <Container>
            <HomeScreen/>
          </Container>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
