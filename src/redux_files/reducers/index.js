import {
  ADD_SCHOOL,
  ADD_TEACHER,
  OPEN_TEACHER_FORM,
  CLOSE_TEACHER_FORM,
  OPEN_SCHOOL_FORM,
  CLOSE_SCHOOL_FORM,
} from "../constants/index";
import { dummyData } from "../../data";

const initialState = {
  ...dummyData,
  schoolFormIsOpen: false,
  teacherFormIsOpen: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SCHOOL:
      return Object.assign({}, state, state.schools.push(action.school));

    case ADD_TEACHER:
      return Object.assign({}, state, state.teachers.push(action.teacher));

    case OPEN_SCHOOL_FORM:
      return {
        ...state,
        schoolFormIsOpen: true,
      };
    case CLOSE_SCHOOL_FORM:
      return {
        ...state,
        schoolFormIsOpen: false,
      };
    case OPEN_TEACHER_FORM:
      return {
        ...state,
        teacherFormIsOpen: true,
      };
    case CLOSE_TEACHER_FORM:
      return {
        ...state,
        teacherFormIsOpen: false,
      };
    default:
      return state;
  }
}

export default rootReducer;
