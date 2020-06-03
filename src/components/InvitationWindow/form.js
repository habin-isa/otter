import React from 'react';
import * as S from './styles';
import { useForm } from 'react-hook-form';
import { func, bool } from 'prop-types';

const Form = ({ handleFormSubmit, submissionError, invalidEmail }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    handleFormSubmit(data);
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputContainer>
          <S.Label>Full name</S.Label>
          {errors.name && <S.Error>This field is required</S.Error>}
          <S.Input name="name" ref={register({ required: true, maxLength: 20, minLength: 3 })} />
        </S.InputContainer>

        <S.InputContainer>
          {' '}
          <S.Label>Email</S.Label>
          {errors.email && <S.Error>This field is required</S.Error>}
          <S.Input name="email" ref={register({ required: true })} />
        </S.InputContainer>

        <S.InputContainer>
          <S.Label>Confirm Email</S.Label>
          {errors.email && <S.Error>This field is required</S.Error>}
          <S.Input name="email" ref={register({ required: true })} />
        </S.InputContainer>
        {submissionError === true ? (
          <S.SubmissionFailed>Submission failed, please try again</S.SubmissionFailed>
        ) : invalidEmail === true ? (
          <S.SubmissionFailed>Invalid email, please re-enter</S.SubmissionFailed>
        ) : (
          <div />
        )}
        <S.SubmitContainer>
          <S.Submit type="submit" value="Send" />
        </S.SubmitContainer>
      </S.Form>
    </S.Wrapper>
  );
};

Form.propTypes = {
  handleFormSubmit: func,
  submissionError: bool,
  invalidEmail: bool
};

Form.defaultProps = {
  handleFormSubmit: () => {},
  submissionError: false,
  invalidEmail: false
};

export default Form;
