import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Logo from './components/Logo';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Logo />
      <Main />
      <About />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
