import sessionReducer from './session/sessionReducer';

const systemReducer = (state, action) => ({
  session: sessionReducer(state && state.session, action)
});

export default systemReducer;
