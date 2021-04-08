import { takeLatest, put, call, all, select } from 'redux-saga/effects';
import QuoteActionTypes from '../constants';

import { addQuoteSuccess, addQuoteFailure } from '../actions';
import { selectQuotes, selectQuoteAdded } from '../selectors';

export function* addQuote() {
  try {
    const quoteAdded = yield select(selectQuoteAdded);
    const quotesCollection = yield select(selectQuotes);
    let quotes = quotesCollection || [];

    if (quotesCollection) {
      quotes = [...quotesCollection, quoteAdded];
    } else {
      quotes.push(quoteAdded);
    }

    yield put(addQuoteSuccess(quotes));
  } catch (error) {
    console.log(error);
    yield put(addQuoteFailure(error));
  }
}

export function* onAddQuoteStart() {
  yield takeLatest(QuoteActionTypes.ADD_QUOTE_START, addQuote);
}

export function* quoteSagas() {
  yield all([call(onAddQuoteStart)]);
}
