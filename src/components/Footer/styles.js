import styled from 'styled-components';

export const Wrapper = styled.div`
  position: sticky;
  bottom: 0;
  z-index: 9999;
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #d1e7ff;
  color: #2e58ff;
  font-size: 12px;
`;

export const Link = styled.a`
  text-decoration: none;
  &:active,
  &:visited {
    text-decoration: none;
    color: #2e58ff;
  }
  &:hover {
    color: pink;
    cursor: pointer;
  }
`;
