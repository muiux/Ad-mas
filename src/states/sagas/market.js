import { call, put, takeEvery } from "redux-saga/effects";

import { FETCH_DATA } from "../actions/market";
import {
  fetchDataSucceededAction,
  fetchDataFailedAction,
} from "../actions/market";
import { fetchMarketData } from "../apis/market";

function* fetchData(action) {
  try {
    const response = yield call(fetchMarketData);
    yield put(fetchDataSucceededAction(response));
  } catch (e) {
    yield put(fetchDataFailedAction());
  }
}

function* marketSaga() {
  yield takeEvery(FETCH_DATA, fetchData);
}

export default marketSaga;
