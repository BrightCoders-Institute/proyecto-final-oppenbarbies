import {createStore} from 'redux';

export const updateUserType = (userType: string) => ({
  type: 'UPDATE_USER_TYPE',
  userType,
});

const initialState = {
  userType: '',
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'UPDATE_USER_TYPE':
      return {
        ...state,
        userType: action.userType,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
