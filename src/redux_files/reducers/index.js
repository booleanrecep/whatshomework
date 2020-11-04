import { ADD_SCHOOL } from "../constants/index";
import { dummyData } from "../../data";

const initialState = {
  data: dummyData,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SCHOOL:
      return Object.assign({}, state, {
        data: state.data.concat(action.payload),
      });

    default:
      break;
  }
}

export default rootReducer