import mockAxios from 'axios';
import { postUser } from './index';
import React from 'react';
import { shallow } from 'enzyme';

import Form from '../components/InvitationWindow/form';

const url = 'https://yo7dm2sa2i.execute-api.eu-west-2.amazonaws.com/prod/signup';

describe('postUser API', () => {
  const mockUser = {
    name: 'Ferrari',
    email: 'ferrari@cuckoo.co'
  };
  it('should call a postUser function', (done) => {
    postUser('/test', {}).then((response) => {
      expect(response).toEqual({
        data: {}
      });
    });
    postUser(url, mockUser).then((response) => {
      expect(response).toEqual({
        data: {}
      });
      expect(mockAxios.request).toHaveBeenCalledWith({
        method: 'post',
        url: url,
        mockUser
      });
      expect(response.status).toEqual(200);
    });
    done();
  });
});

describe('postUser API with invalid user', () => {
  const mockInvalidUser = {
    name: 'Bob',
    email: 'bob@cuckoo.co'
  };
  it('should return error', () => {
    postUser(url, { mockInvalidUser }).then((response) => {
      expect(response.status).toEqual(500);
    });
  });
  it('renders correct error message when email is invalid', () => {
    const page = shallow(<Form handleFormSubmit={() => {}} submissionError={false} invalidEmail={true} />).render();
    expect(page.find('span').text()).toEqual('Invalid email, please re-enter');
  });
  it('renders correct error message when user is invalid', () => {
    const page = shallow(<Form handleFormSubmit={() => {}} submissionError={true} invalidEmail={false} />).render();
    expect(page.find('span').text()).toEqual('Submission failed, please try again');
  });
});
