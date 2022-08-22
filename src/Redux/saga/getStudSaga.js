import { getStud } from "./request";
import { call, put, takeLatest } from "redux-saga/effects";
import { setStud } from "../actions/studAction";
import * as actionTypes from "../type/studType";

fuction* getStudSaga(action){
    try {
        const resp = yield call(getStud);
        const { data } = resp;
        yield put(setStud(data));
    }
    catch (err) {
        console.log(err);
    }
}

export function* watchergetStudSaga() {
    yield takeLatest(actionTypes.GET_STUD, getStudSaga);
}

