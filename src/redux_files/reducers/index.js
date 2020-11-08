import {
  ADD_SCHOOL,
  ADD_TEACHER,
  OPEN_TEACHER_FORM,
  CLOSE_TEACHER_FORM,
  OPEN_SCHOOL_FORM,
  CLOSE_SCHOOL_FORM,
  RESEND_DATA,
  DELETE_SCHOOL,
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
      return {
        ...state,
        schools: state.schools.concat(action.school),
      };

      break;
    case DELETE_SCHOOL:
      return {
        ...state,
        schools: state.schools.filter(
          (school) => school.name !== action.school
        ),
      };

    case ADD_TEACHER:
      return {
        ...state,
        teachers: [...state.teachers, action.teacher],
        schools: state.schools.map((school) =>
          school.name === action.teacher.school
            ? {
                ...school,
                teachers: [...school.teachers, action.teacher.teacherID],
              }
            : school
        ),
      };

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
      return state;
    default:
      return state;
  }
}

export default rootReducer;
