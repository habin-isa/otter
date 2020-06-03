import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Submit = styled.input`
  background: #333333;
  width: 150px;
  height: 40px;
  border-radius: 10px;
  font-size: 15px;
  color: white;
  border: none;
  margin-top: 40px;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
  outline: none;
`;

export const Error = styled.span`
  font-size: 12px;
  color: red;
`;
