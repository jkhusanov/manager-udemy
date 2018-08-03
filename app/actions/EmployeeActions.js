import firebase from 'firebase'
import { 
  EMPLOYEE_UPDATE, 
  EMPLOYEE_CREATE, 
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
  CLEAR_EMPLOYEE_FORM,
} from './types'

export const employeeUpdate = ({ prop, value }) => {
  return {
  type: EMPLOYEE_UPDATE,
  payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift, navigation }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => { 
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then(() => {
      dispatch({ type: EMPLOYEE_CREATE });
      navigation.goBack();
    })
  };
};

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();
  
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      })
  };
};

export const employeeSave = ({name, phone, shift, uid, navigation }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        navigation.goBack()
      });
  };
};

export const clearEmployeeForm = () => {
  return (dispatch) => dispatch({
      type: CLEAR_EMPLOYEE_FORM
  })
};

export const employeeDelete = ({ uid, navigation }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        navigation.goBack()
      })
  }
}