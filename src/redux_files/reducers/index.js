import {
  ADD_SCHOOL,
  ADD_TEACHER,
  OPEN_TEACHER_FORM,
  CLOSE_TEACHER_FORM,
  OPEN_SCHOOL_FORM,
  CLOSE_SCHOOL_FORM,
  DELETE_TEACHER,
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

      
    case DELETE_SCHOOL:
      return {
        ...state,
        schools: state.schools.filter(
          (school) => school.name !== action.school
        ),
        teachers: state.teachers.filter(
          (teacher) => teacher.school !== action.school
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
      case DELETE_TEACHER:
        return {
          ...state,
          schools: state.schools.map((school) =>
          school.name === action.school
            ? {
                ...school,
                teachers:school.teachers.filter(teacher=>teacher!==action.teacherID),
              }: school,
           
        ),
        teachers: state.teachers.filter(teacher=> teacher.teacherID !==action.teacherID)
          // schools: state.schools.filter(
          //   (school) => school.name !== action.teacer
          // ),
          // teachers: state.teachers.filter(
          //   (teacher) => teacher.school !== action.teacher
          // ),
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
    default:
      return state;
  }
}

export default rootReducer;
