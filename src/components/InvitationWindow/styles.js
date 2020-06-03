import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  min-height: 40vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 40vh;
  justify-content: space-evenly;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 20px;
  margin-top: 5px;
`;

export const Label = styled.label``;

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

export const Success = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
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

export const SuccessTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

export const SuccessSubtitle = styled.div`
  margin-top: 30px;
`;

export const SubmissionFailed = styled.span`
  color: red;
`;

export const SubmitContainer = styled.div`
  text-align: center;
`;
