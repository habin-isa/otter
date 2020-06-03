import React, { useState } from 'react';
import * as S from './styles';
import Header from '../Header';
import PageTitle from '../PageTitle';
import HomeContainer from '../HomeContainer';
import Footer from '../Footer';
import Modal from 'react-modal';

const App = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };

  // const afterOpenModal = () => {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  return (
    <S.Wrapper>
      <Header />
      <S.MainContainer>
        <PageTitle />
        <HomeContainer handleClick={handleButtonClick} />
        <div>
          <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
          >
            <button onClick={closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
            </form>
          </Modal>
        </div>
      </S.MainContainer>
      <Footer />
    </S.Wrapper>
  );
};

export default App;
