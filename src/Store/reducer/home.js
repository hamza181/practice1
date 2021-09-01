import * as constant from "../constant/constant";

const initialState = {
  counter: 0,
  sumLoading: false,
  sumError: null,
  data: null,
  user: null,
  getoading: false,
  getError: null,
  x: null,
};

export const home = (state = initialState, action) => {
  switch (action.type) {
    case constant.ADD:
      return {
        ...state,
        counter: state.counter + 1,
      };

      case constant.START:
      return {
        ...state,
        // data: state.counter + 1,
      };

      case constant.SUCCESS:
        //   console.log(action.payload);
      return {
        ...state,
        data: action.payload.data,
      };

      

    //   ----------------------
    case 'ADD_START':
      return {
        ...state,
        sumLoading: true,
        sumError: null,
        data: null,
      };
    case 'ADD_SUCCESS':
      return {
        ...state,
        sumLoading: false,
        sumError: null,
        user: action.payload.data,
      };
    case 'ADD_FAIL':
      return {
        ...state,
        sumLoading: false,
        sumError: action.payload.error,
        data: null,
      };
    case 'ADD_START':
      return {
        ...state,
        getLoading: true,
        getError: null,
        getData: null,
      };
    case 'ADD_SUCCESS':
      return {
        ...state,
        getLoading: false,
        getError: null,
        getData: action.payload.data,
      };
    case 'ADD_FAIL':
      return {
        ...state,
        getLoading: false,
        getError: action.payload.error,
        getData: null,
      };
    case 'ADD_START':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
