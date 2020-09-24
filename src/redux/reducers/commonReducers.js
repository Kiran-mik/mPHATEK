import { REG, REC_LISTING, EDITTASK } from '../actions';



const INITIAL_STATE = {
  userDetails: {},
  totalRecords: [],
  taskDetails: {},
  credentials: { email: "test@grr.la", password: "Test@123" }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REG:
      return Object.assign({}, state, { userDetails: action.payload });
    case REC_LISTING:
      return Object.assign({}, state, { totalRecords: action.payload });
    case EDITTASK:
      return Object.assign({}, state, { taskDetails: action.payload });


    default:
      return state;
  }
}
