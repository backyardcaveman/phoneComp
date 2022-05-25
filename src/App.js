import { Fragment } from 'react';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Form from './components/Form';
import Header from './components/Header';
import Hours from './components/Hours';
import Logo from './components/Logo';
import Main from './components/Main';
import Modal from './components/Modal';
import ModalContent from './components/ModalContent';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true)
  }

  const hideModalHandler = () => {
    setShowModal(false)
  }

  return (
    <Fragment>
      <Header />
      <Logo />
      <Main />
      <About />
      <Form showModal={showModalHandler}/>
      <Hours />
      <Footer />
      <ScrollToTop />
      {showModal && <Modal>
        <ModalContent  hideModal={hideModalHandler}/>
      </Modal>}
    </Fragment>
  );
}

export default App;
