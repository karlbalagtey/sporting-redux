import { createSelector } from 'reselect';

const selectQuote = state => state.quote;

export const selectQuotes = createSelector(
  [selectQuote],
  quote => quote.quotes,
);

export const selectQuoteAdded = createSelector(
  [selectQuote],
  quote => quote.quoteAdded,
);

export const selectIsFetching = createSelector(
  [selectQuote],
  quote => quote.isFetching,
);

export const selectIsSuccessful = createSelector(
  [selectQuote],
  quote => quote.isSuccessful,
);
