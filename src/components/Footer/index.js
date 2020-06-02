import React from 'react';
import * as S from './styles';
// import { string } from 'prop-types';

const Footer = () => {
  return (
    <S.Wrapper>
      <div>
        Made with{' '}
        <span role="img" aria-label="heart">
          ❤️
        </span>{' '}
        in London
      </div>
      <div>
        Powered by <S.Link href="https://github.com/habin-isa/">Githab</S.Link>
      </div>
    </S.Wrapper>
  );
};

export default Footer;

// If props were drilled into App component
// E.g. const App = ({ propName, propTwo })

// App.propTypes = {
//   propName: string,
//   propTwo: string.isRequired
// };

// App.defaultProps = {
//   propName: 'Kimmy'
// };
