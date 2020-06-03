import React from 'react';
import * as S from './styles';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    if (data.email === data.confirmedEmail) {
      console.log(data);
    }
  };
  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <label>Full name</label>
        {errors.fullName && <S.Error>This field is required</S.Error>}
        <input name="fullName" ref={register({ required: true, maxLength: 20 })} />

        <label>Email</label>
        {errors.email && <S.Error>This field is required</S.Error>}
        <input name="email" ref={register({ required: true })} />

        <label>Confirm Email</label>
        {errors.confirmedEmail && <S.Error>This field is required</S.Error>}
        <input name="confirmedEmail" ref={register({ required: true })} />

        <S.Submit type="submit" />
      </S.Form>
    </S.Wrapper>
  );
};

export default Form;
