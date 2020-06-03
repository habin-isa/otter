import React, { useState } from 'react';
import * as S from './styles';

import Header from '../Header';
import TitleContainer from '../TitleContainer';
import InvitationWindow from '../InvitationWindow';
import HomeContainer from '../HomeContainer';
import Footer from '../Footer';
import Modal from 'react-modal';
import CloseIcon from '../../assets/close.png';

import { postUser } from '../../services';

const App = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
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

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleButtonClick = () => {
    setIsOpen(true);
    setSignUpSuccess(false);
  };

  const handleFormSubmit = async (user) => {
    console.log('user:', user);
    try {
      const response = await postUser(user);
      console.log(response);
      if (response.status === 200) {
        setSignUpSuccess(true);
      }
    } catch (error) {
      if (error.status === 500) {
        console.log('puppi error');
      }
      console.log('error posting user');
    } finally {
      console.log('postUser called');
    }
  };

  return (
    <S.Wrapper>
      <Header />
      <S.MainContainer>
        <TitleContainer />
        <HomeContainer handleClick={handleButtonClick} />
        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
          >
            <S.Icon src={CloseIcon} alt="close-icon" onClick={closeModal} />
            <InvitationWindow
              handleFormSubmit={handleFormSubmit}
              signUpSuccess={signUpSuccess}
              handleOkClick={closeModal}
            />
          </Modal>
        </div>
      </S.MainContainer>
      <Footer />
    </S.Wrapper>
  );
};

export default App;
