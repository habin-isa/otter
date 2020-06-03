import React from 'react';
import * as S from './styles';
import Form from './form';
import { func, bool } from 'prop-types';

const InvitationWindow = ({ handleFormSubmit, signUpSuccess, handleOkClick, submissionError, invalidEmail }) => {
  return (
    <S.Wrapper>
      {signUpSuccess === true ? (
        <S.Success>
          <S.SuccessTitle>All done!</S.SuccessTitle>
          <S.SuccessSubtitle>You will be one of the first to be notified of our launch!</S.SuccessSubtitle>
          <S.Button onClick={handleOkClick}>OK</S.Button>
        </S.Success>
      ) : (
        <Form handleFormSubmit={handleFormSubmit} submissionError={submissionError} invalidEmail={invalidEmail} />
      )}
    </S.Wrapper>
  );
};

InvitationWindow.propTypes = {
  handleFormSubmit: func,
  signUpSuccess: bool,
  signUpSuccess: bool,
  handleOkClick: func,
  submissionError: bool,
  invalidEmail: bool
};

InvitationWindow.defaultProps = {
  handleFormSubmit: () => {},
  signUpSuccess: false,
  signUpSuccess: false,
  handleOkClick: () => {},
  submissionError: false,
  invalidEmail: false
};

export default InvitationWindow;
