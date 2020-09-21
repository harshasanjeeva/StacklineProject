import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from "../actions";

const initialState = {
  products: [],
  loading: false,
  error: null
};

export default function productReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_PRODUCTS_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        products: action.payload.products,
      };

    case FETCH_PRODUCTS_FAILURE:
      // The request failed, but it did stop, so set loading to "false".
      // Save the error, and we can display it somewhere
      // Since it failed, we don't have items to display anymore, so set it empty.
      return {
        ...state,
        loading: true,
        error: action.payload.error,
        items: []
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
