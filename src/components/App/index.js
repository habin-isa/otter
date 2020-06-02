import React from 'react';
import * as S from './styles';
import Header from '../Header';
import HomeContainer from '../HomeContainer';
import Footer from '../Footer';
import OtterIcon from '../../assets/otter.png';
// import { string } from 'prop-types';

const App = () => {
  return (
    <S.Wrapper>
      <Header />
      <S.MainContainer>
        <S.IconContainer>
          <S.Icon src={OtterIcon} alt="otter-icon" />
          <S.Title>Otter</S.Title>
        </S.IconContainer>
        <HomeContainer />
      </S.MainContainer>
      <Footer />
    </S.Wrapper>
  );
};

export default App;

// If props were drilled into App component
// E.g. const App = ({ propName, propTwo })

// App.propTypes = {
//   propName: string,
//   propTwo: string.isRequired
// };

// App.defaultProps = {
//   propName: 'Kimmy'
// };
