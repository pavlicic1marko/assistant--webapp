import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import TodoScreen from './screens/TODOScreen';
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen';
import RegisterScreens from './screens/RegisterScreens';
import ProfileScreen from './screens/ProfileScreen';
import AiChatScreen from './screens/AiChatScreen';

function App() {
  return (
    <Router>
      <Header/>
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen/>} exact/>
              <Route path='/login' element={<LoginScreen/>} />
              <Route path='/register' element={<RegisterScreens/>} />
              <Route path='/todo/:id' element={<TodoScreen/>} />
              <Route path='/profile' element={<ProfileScreen/>} />
              <Route path='/ai-chat' element={<AiChatScreen/>}/>
            </Routes>
            
          </Container>
        </main>
      <Footer/>
    </Router>
  );
}

export default App;
