import React, { useState } from 'react';
import * as S from './styles';
import Header from '../Header';
import TitleContainer from '../TitleContainer';
import InvitationWindow from '../InvitationWindow';
import HomeContainer from '../HomeContainer';
import Footer from '../Footer';
import Modal from 'react-modal';
import CloseIcon from '../../assets/close.png';

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
            {/* if form submitted show invitationWindow submitted=true */}
            <InvitationWindow />
          </Modal>
        </div>
      </S.MainContainer>
      <Footer />
    </S.Wrapper>
  );
};

export default App;
