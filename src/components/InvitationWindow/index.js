import React from 'react';
import * as S from './styles';
import Form from './form';
import { func } from 'prop-types';

const InvitationWindow = ({ handleFormSubmit, signUpSuccess, handleOkClick }) => {
  return (
    <S.Wrapper>
      {signUpSuccess === true ? (
        <S.Success>
          <S.SuccessTitle>All done!</S.SuccessTitle>
          <S.SuccessSubtitle>You will be one of the first to be notified of our launch!</S.SuccessSubtitle>
          <S.Button onClick={handleOkClick}>OK</S.Button>
        </S.Success>
      ) : (
        <Form handleFormSubmit={handleFormSubmit} />
      )}
    </S.Wrapper>
  );
};

InvitationWindow.propTypes = {
  handleFormSubmit: func
};

InvitationWindow.defaultProps = {
  handleFormSubmit: () => {}
};

export default InvitationWindow;
