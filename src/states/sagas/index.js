import { fork } from "redux-saga/effects";

import marketSaga from "./market";

function* rootSaga() {
  yield fork(marketSaga);
}

export default rootSaga;
