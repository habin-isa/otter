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
  const [submissionError, setSubmissionError] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
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
    // setInvalidEmail(false);
    setIsOpen(true);
    setSignUpSuccess(false);
  };

  const validateEmail = (user) => {
    // eslint-disable-next-line
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
      handlePostUser(user);
    } else {
      setInvalidEmail(true);
    }
  };

  const handleFormSubmit = (user) => {
    validateEmail(user);
  };

  const handlePostUser = async (user) => {
    try {
      const response = await postUser(user);
      if (response.status === 200) {
        setSignUpSuccess(true);
      }
    } catch (error) {
      setSubmissionError(true);
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
              submissionError={submissionError}
              invalidEmail={invalidEmail}
            />
          </Modal>
        </div>
      </S.MainContainer>
      <Footer />
    </S.Wrapper>
  );
};

export default App;
