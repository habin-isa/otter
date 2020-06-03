import React from 'react';
import * as S from './styles';
import { node } from 'prop-types';

const Modal = (props) => {
  const { children } = props;
  return <S.Wrapper>{children}</S.Wrapper>;
};

Modal.propTypes = {
  children: node
};

export default Modal;
