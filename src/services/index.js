import axios from 'axios';

export const postUser = async (user) => {
  const url = 'https://yo7dm2sa2i.execute-api.eu-west-2.amazonaws.com/prod/signup';
  const response = await axios.post(url, {
    name: user.name,
    email: user.email
  });
  console.log(response.error);
  return response;
};
