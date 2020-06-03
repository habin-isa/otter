import React from 'react';
import * as S from './styles';
import { func } from 'prop-types';

const HomeContainer = ({ handleClick }) => {
  return (
    <S.Wrapper>
      <S.Title>The new way to happiness is through Otter!</S.Title>
      <S.Subtitle>Be the first to know when we launch</S.Subtitle>
      <S.Button onClick={handleClick}>Request an invite</S.Button>
    </S.Wrapper>
  );
};

export default HomeContainer;

HomeContainer.propTypes = {
  handleClick: func
};

HomeContainer.defaultProps = {
  handleClick: () => {}
};
