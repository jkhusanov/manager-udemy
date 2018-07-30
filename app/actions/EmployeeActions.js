import firebase from 'firebase'
import { 
  EMPLOYEE_UPDATE, 
  EMPLOYEE_CREATE, 
  EMPLOYEES_FETCH_SUCCESS } from './types'
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
  }
}

export const employeesFetch = () => {
  const { currentUser } = firebase.auth();
  
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .on('value', snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      })
  }
}