import { ADD_SCHOOL } from "../constants/index";

export function addSchool(payload) {
  return { type: ADD_SCHOOL, payload };
}
