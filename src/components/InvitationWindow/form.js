import React from 'react';
import * as S from './styles';
import { useForm } from 'react-hook-form';
import { func } from 'prop-types';

const Form = ({ handleFormSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // if (data.email === data.confirmedEmail) {
    console.log(data);
    handleFormSubmit(data);
    // }
  };
  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputContainer>
          <S.Label>Full name</S.Label>
          {errors.name && <S.Error>This field is required</S.Error>}
          <S.Input name="name" ref={register({ required: true, maxLength: 20 })} />
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
        <S.Submit type="submit" value="Send" />
      </S.Form>
    </S.Wrapper>
  );
};

Form.propTypes = {
  handleFormSubmit: func
};

Form.defaultProps = {
  handleFormSubmit: () => {}
};

export default Form;
