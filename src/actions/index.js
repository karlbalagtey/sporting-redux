import QuoteActionTypes from '../constants';

export const addQuoteStart = quoteAdded => ({
  type: QuoteActionTypes.ADD_QUOTE_START,
  payload: quoteAdded,
});

export const addQuoteSuccess = quotes => ({
  type: QuoteActionTypes.ADD_QUOTE_SUCCESS,
  payload: quotes,
});

export const addQuoteFailure = errorMessage => ({
  type: QuoteActionTypes.ADD_QUOTE_FAILURE,
  payload: errorMessage,
});

export const resetAddQuote = () => ({
  type: QuoteActionTypes.RESET_ADD_QUOTE,
});
