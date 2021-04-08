import QuoteActionTypes from '../constants';

const INITIAL_STATE = {
  quotes: null,
  quoteAdded: null,
  isFetching: false,
  isSuccessful: false,
  errorMessage: undefined,
};

const quoteReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuoteActionTypes.ADD_QUOTE_START:
      return {
        ...state,
        isFetching: true,
        isSuccessful: false,
        quoteAdded: action.payload,
      };
    case QuoteActionTypes.ADD_QUOTE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isSuccessful: true,
        quotes: action.payload,
        quoteAdded: null,
      };
    case QuoteActionTypes.ADD_QUOTE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case QuoteActionTypes.RESET_ADD_QUOTE:
      return {
        ...state,
        isFetching: false,
        isSuccessful: false,
      };
    default:
      return state;
  }
};

export default quoteReducer;
