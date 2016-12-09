import * as types from '../actions/sample';

const initialState = {
  email_message: ''
};

export default function sample(state = initialState, action) {
  switch (action.type) {
  case types.EMAIL_SEND_SUCCESS:
    return Object.assign(
      {},
      state,
      { email_message: 'Your sample was scheduled' }
    );

  default:
    return state;
  }
}
