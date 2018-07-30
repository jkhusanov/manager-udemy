import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      //action.payload === { props: 'name', value: 'jane' }
      return { ...state, [action.payload.prop]: action.payload.value };
      //square brackets above are not for array, they are key extractors (key interpolation)
    case EMPLOYEE_CREATE:
      return { INITIAL_STATE }
    default:
      return state;
  }
};

