import {
  ADD_SCHOOL,
  ADD_TEACHER,
  OPEN_TEACHER_FORM,
  CLOSE_TEACHER_FORM,
  OPEN_SCHOOL_FORM,
  CLOSE_SCHOOL_FORM,
  RESEND_DATA,
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
    state.schools.push(action.school)
     break
j
    case ADD_TEACHER:
      // console.log(action);
      // console.log(state);
      // state.teachers.push(action.teacher);
      state.schools.map((school) =>
        school.name === action.teacher.school
          ? school.teachers.push(action.teacher.teacherID)
          : school
      );

      return {
        ...state,
        teachers:[
          ...state.teachers,
          action.teacher
        ]
      }
      // break

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
    case RESEND_DATA:
      return (state = action.state);
    default:
      return state;
  }
}

export default rootReducer;
