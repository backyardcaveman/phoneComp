import { Fragment } from 'react';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/UI/Footer'
import Form from './components/Form';
import Header from './components/UI/Header';
import Hours from './components/Hours';
import Logo from './components/Logo';
import Main from './components/Main';
import Modal from './components/UI/Modal';
import ModalContent from './components/UI/ModalContent';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [showModal, setShowModal] = useState(false);
  
  const hideModalHandler = () => {
    setShowModal(false)
  }

  return (
    <Fragment>
      <Header />
      <Logo />
      <Main />
      <About />
      <Form setShowModal={setShowModal} showModal={showModal}/>
      <Hours />
      <Footer />
      <ScrollToTop />
      {showModal && <Modal hideModal={hideModalHandler}>
        <ModalContent  hideModal={hideModalHandler}/>
      </Modal>}
    </Fragment>
  );
}

export default App;
