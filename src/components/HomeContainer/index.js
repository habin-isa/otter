import React from 'react';
import * as S from './styles';
// import { string } from 'prop-types';

const HomeContainer = () => {
  return (
    <S.Wrapper>
      <S.Title>The new way to happiness is through Otter!</S.Title>
      <S.Subtitle>Be the first to know when we launch</S.Subtitle>
      <S.Button>Request an invite</S.Button>
    </S.Wrapper>
  );
};

export default HomeContainer;

// If props were drilled into App component
// E.g. const App = ({ propName, propTwo })

// App.propTypes = {
//   propName: string,
//   propTwo: string.isRequired
// };

// App.defaultProps = {
//   propName: 'Kimmy'
// };
