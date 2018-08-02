import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCCESS,
  CLEAR_EMPLOYEE_FORM,
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
      return { INITIAL_STATE };
    case EMPLOYEE_SAVE_SUCCESS:
      return { INITIAL_STATE };
    case CLEAR_EMPLOYEE_FORM:
      return { INITIAL_STATE };
    default:
      return state;
  }
};

