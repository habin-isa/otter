import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  background: #d1e7ff;
  color: white;
  background: #2e58ff;
  padding: 30px;
  top: 0;
  height: 80vh;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 30px;
`;

export const Subtitle = styled.div`
  font-size: 20px;
  margin-top: 20px;
`;

export const Button = styled.button`
  background: white;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  color: #333333;
  border: none;
  margin-top: 40px;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
  outline: none;
`;
