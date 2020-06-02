import styled from 'styled-components';

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 9999;
  background: white;
  height: 5vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #2e58ff;
  padding-right: 30px;
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
